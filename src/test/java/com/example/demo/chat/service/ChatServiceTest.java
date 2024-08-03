package com.example.demo.chat.service;


import static org.assertj.core.api.Assertions.assertThat;
import static org.hibernate.validator.internal.util.Contracts.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.example.demo.chat.dto.ChatRoomRequestDto;
import com.example.demo.chat.dto.ChatRoomResponseDto;
import com.example.demo.chat.entiity.ChatMessage;
import com.example.demo.chat.entiity.ChatRoom;
import com.example.demo.chat.repository.ChatMessageRepository;
import com.example.demo.chat.repository.ChatRoomRepository;
import com.example.demo.chat.service.impl.ChatRoomServiceImpl;
import com.example.demo.exception.MarkethingException;
import com.example.demo.exception.type.ErrorCode;
import com.example.demo.marketpurchaserequest.entity.MarketPurchaseRequest;
import com.example.demo.marketpurchaserequest.repository.MarketPurchaseRequestRepository;
import com.example.demo.siteuser.entity.SiteUser;
import com.example.demo.siteuser.repository.SiteUserRepository;
import com.example.demo.type.AuthType;
import com.example.demo.type.PurchaseRequestStatus;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;

@ExtendWith(MockitoExtension.class)
public class ChatServiceTest {

    @MockBean
    private MappingMongoConverter mappingMongoConverter;
    @Mock
    private SiteUserRepository siteUserRepository;
    @Mock
    private MarketPurchaseRequestRepository requestRepository;
    @Mock
    private ChatRoomRepository chatRoomRepository;
    @Mock
    private ChatMessageRepository chatMessageRepository;
    @InjectMocks
    private ChatRoomServiceImpl chatRoomServiceImpl;
    @Test
    void createSuccess() {
        ChatRoomRequestDto chatRoomRequestDto = getChatRoomRequestDto();
        MarketPurchaseRequest request = getRequest();
        SiteUser requester = getRequester();
        SiteUser agent = getAgent();
        ChatRoom chatRoom = chatRoomRequestDto.toEntity(request, requester, agent);


        // given --> 이거로써 지정을 해주는 것
        given(requestRepository.findById(chatRoomRequestDto.getRequestId())) //
                .willReturn(Optional.of(request));
        given(siteUserRepository.findById(chatRoomRequestDto.getRequesterId()))
                .willReturn(Optional.of(requester));
        given(siteUserRepository.findById(chatRoomRequestDto.getAgentId()))
                .willReturn(Optional.of(agent));
        given(chatRoomRepository.save(any(ChatRoom.class)))
                .willReturn(chatRoom);

        // when
        ChatRoom result = chatRoomServiceImpl.createChatRoom(chatRoomRequestDto);

        // then
        assertThat(result.getAgent()).isEqualTo(agent);
        assertThat(result.getMarketPurchaseRequest()).isEqualTo(request);
        assertThat(result.getRequester()).isEqualTo(requester);
    }

    @Test
    void createFailedByNotFound() {
        ChatRoomRequestDto requestDto = getChatRoomRequestDto();
        // given
        given(requestRepository.findById(requestDto.getRequesterId())).willReturn(Optional.empty());

        // when
        MarkethingException exception = assertThrows(MarkethingException.class,
                () -> chatRoomServiceImpl.createChatRoom(requestDto));

        // then
        assertEquals(exception.getErrorCode(), ErrorCode.USER_NOT_FOUND);
    }
    @Test
    @DisplayName("나의 채팅방 목록을 불러오는 테스트")
    void getMyChatRooms(){
        // given
        String email = "mock@mock.com";
        SiteUser siteUser = getAgent(); // 의뢰자로 찾는 것을 의미함
        ChatRoom chatRoom1 = getChatRoom(); // 채팅방을 지정을 함
        ChatRoom chatRoom2 = getChatRoom2(); // 채팅방을 지정을 함
        ChatMessage message = getChatMessage(); // 일단 1번 방에 있는 메시지가 있다는 것을 가정

        when(siteUserRepository.findByEmail(email)).thenReturn(Optional.of(siteUser));
        when(chatRoomRepository.findByAgentId(siteUser.getId())).thenReturn(Arrays.asList(chatRoom1));
        when(chatRoomRepository.findByRequesterId(siteUser.getId())).thenReturn(Arrays.asList(chatRoom2));
        when(chatMessageRepository.findFirstByChatRoomIdOrderByCreatedAtDesc(chatRoom1.getId())).thenReturn(message);
        // 일단 1번 채팅방에 존재하고 있는 채팅 메시지가 나온다고 가정을 함

        // when
        List<ChatRoomResponseDto> chatRoomResponseDtos = chatRoomServiceImpl.getMyChatRooms(email);

        // then
        assertNotNull(chatRoomResponseDtos);
        assertEquals(2, chatRoomResponseDtos.size());

        ChatRoomResponseDto dto1 = chatRoomResponseDtos.get(0);
        assertEquals(1L, dto1.getChatRoomId());
        assertEquals("content", dto1.getLastChatMessage());
    }

    @Test
    @DisplayName("나의 채팅방 조회 실패 테스트")
    void getFailedBySiteUserId() {
        // given
        String email = "mock@email.com";
        given(siteUserRepository.findByEmail(email))
                .willReturn(Optional.empty());

        // when
        MarkethingException exception = assertThrows(MarkethingException.class,
                () -> chatRoomServiceImpl.getMyChatRooms(email)); // 테스트 진행

        // then
        assertEquals(exception.getErrorCode(), ErrorCode.USER_NOT_FOUND);
    }

    @Test
    public void DeleteChatRoomAgent() {
        // Given
        ChatRoom chatRoom = getChatRoom();
        SiteUser agent = getAgent();
        List<ChatRoom> chatRoomList = new ArrayList<>();
        chatRoomList.add(chatRoom);
        when(chatRoomRepository.findById(chatRoom.getId())).thenReturn(Optional.of(chatRoom));
        // When
        chatRoomServiceImpl.deleteChatRoom(chatRoom.getId(), agent.getEmail());

        // Then
        verify(chatRoomRepository, times(1)).findById(chatRoom.getId());
    }

    @Test
    public void deleteFailedCatRoom(){
        // given
        ChatRoom chatRoom = getChatRoom();
        given(chatRoomRepository.findById(chatRoom.getId())).willReturn(Optional.empty());

        // when
        MarkethingException exception = assertThrows(MarkethingException.class,
                () -> chatRoomServiceImpl.deleteChatRoom(chatRoom.getId(),chatRoom.getAgent().getEmail()));
        // then
        assertEquals(exception.getErrorCode(), ErrorCode.CHATROOM_NOT_FOUND);
    }

    private ChatRoomRequestDto getChatRoomRequestDto(){
        return ChatRoomRequestDto.builder()
                .requestId(1L)
                .requesterId(1L)
                .agentId(2L)
                .build();
    }
    public static MarketPurchaseRequest getRequest(){
        return MarketPurchaseRequest.builder()
                .id(1L)
                .title("title")
                .content("content")
                .postImg("postImg")
                .fee(1)
                .purchaseRequestStatus(PurchaseRequestStatus.IN_PROGRESS)
                .meetupTime(LocalTime.now())
                .meetupDate(LocalDate.now())
                .meetupAddress("Address")
                .meetupLat(37.56667062)
                .meetupLon(126.9722919)
                .createdAt(LocalDateTime.now())
                .build();
    }
    public static MarketPurchaseRequest getRequest2(){

        return MarketPurchaseRequest.builder()
                .id(2L)
                .title("title")
                .content("content")
                .postImg("postImg")
                .fee(1)
                .purchaseRequestStatus(PurchaseRequestStatus.IN_PROGRESS)
                .meetupTime(LocalTime.now())
                .meetupDate(LocalDate.now())
                .meetupAddress("Address")
                .meetupLat(37.56667062)
                .meetupLon(126.9722919)
                .createdAt(LocalDateTime.now())
                .build();
    }
    private static SiteUser getRequester() {
        GeometryFactory geometryFactory = new GeometryFactory();
        double longitude = 126.97796919; // 경도
        double latitude = 37.56667062;   // 위도
        Point myLocation = geometryFactory.createPoint(new Coordinate(longitude, latitude));

        return SiteUser.builder()
                .id(1L)
                .email("mockEmail@naver.com")
                .password("password")
                .name("name2")
                .nickname("nickname")
                .phoneNumber("010-1234-5678")
                .address("address")
                .mannerScore(List.of("0,0,0"))
                .profileImg("profileImg")
                .myLocation(myLocation)
                .status(true)
                .authType(AuthType.GENERAL)
                .createdAt(LocalDateTime.now())
                .build();
    }
    private static SiteUser getAgent() {
        GeometryFactory geometryFactory = new GeometryFactory();
        double longitude = 126.97796919; // 경도
        double latitude = 37.56667062;   // 위도
        Point myLocation = geometryFactory.createPoint(new Coordinate(longitude, latitude));

        return SiteUser.builder()
                .id(2L)
                .email("mockEmail@gmail.com")
                .password("password")
                .name("name")
                .nickname("nickname")
                .phoneNumber("010-1234-5678")
                .address("address")
                .myLocation(myLocation)
                .mannerScore(List.of("0,0,0"))
                .profileImg("profileImg")
                .status(true)
                .authType(AuthType.GENERAL)
                .createdAt(LocalDateTime.now())
                .build();
    }
    private static ChatRoom getChatRoom(){
        return ChatRoom.builder()
                .id(1L)
                .marketPurchaseRequest(getRequest())
                .agent(getAgent())
                .requester(getRequester())
                .createdAt(LocalDateTime.now())
                .build();
    }
    private static ChatRoom getChatRoom2(){
        return ChatRoom.builder()
                .id(2L)
                .marketPurchaseRequest(getRequest2())
                .agent(getRequester())
                .requester(getAgent())
                .createdAt(LocalDateTime.now().plusSeconds(5)) // 5초 뒤로 지정을 함
                .build();
    }
    private static ChatMessage getChatMessage(){
        return ChatMessage.builder()
                .chatRoomId(1L)
                .senderId(1L)
                .content("content")
                .build();
    }
}
