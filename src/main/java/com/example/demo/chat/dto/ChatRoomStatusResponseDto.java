package com.example.demo.chat.dto;
import com.example.demo.chat.entiity.ChatRoom;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class ChatRoomStatusResponseDto { // 채팅방의 상태를 불러오는 클래스
    private Long senderId;
    private int roomStatus;
    private Long writerId;
    public static ChatRoomStatusResponseDto fromEntity(Long senderId, ChatRoom chatRoom) {
        return ChatRoomStatusResponseDto.builder()
                .senderId(senderId)
                .roomStatus(chatRoom.getChatRoomStatus())
                .writerId(chatRoom.getMarketPurchaseRequest().getSiteUser().getId())
                .build();
    }
}
