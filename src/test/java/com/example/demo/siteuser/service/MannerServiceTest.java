package com.example.demo.siteuser.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.lenient;

import com.example.demo.siteuser.entity.Manner;
import com.example.demo.exception.MarkethingException;
import com.example.demo.exception.type.ErrorCode;
import com.example.demo.siteuser.dto.MannerRequestDto;
import com.example.demo.siteuser.entity.SiteUser;
import com.example.demo.siteuser.repository.MannerRepository;
import com.example.demo.siteuser.repository.SiteUserRepository;
import com.example.demo.siteuser.service.impl.MannerServiceImpl;
import com.example.demo.type.AuthType;
import com.example.demo.type.Rate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class MannerServiceTest {

    @InjectMocks
    private MannerServiceImpl managerServiceImpl;

    @Mock
    private MannerRepository mannerRepository;

    @Mock
    private SiteUserRepository siteUserRepository;

    private static final GeometryFactory geometryFactory = new GeometryFactory();

    @Test
    @DisplayName("회원 매너 평가 성공 테스트")
    void successCreateManner() throws Exception {
        // given
        SiteUser rater = getSiteUser(1L);
        SiteUser taker = getSiteUser(2L);
        MannerRequestDto mannerRequestDto = getMannerRequestDto();
        Manner manner = mannerRequestDto.toEntity(rater, taker);
        // mocking
        given(mannerRepository.save(any(Manner.class))).willReturn(manner);
        given(siteUserRepository.findByEmail(rater.getEmail())).willReturn(Optional.ofNullable(rater));
        given(siteUserRepository.findById(taker.getId())).willReturn(Optional.ofNullable(taker));
        given(mannerRepository.findById(manner.getId())).willReturn(Optional.ofNullable(manner));
        // when
        Manner newManner = managerServiceImpl.createManner(mannerRequestDto,rater.getEmail(),taker.getId());
        // then
        Manner findManner = mannerRepository.findById(newManner.getId()).orElse(null);
        assertEquals(manner.getId(), findManner.getId());
    }
    @Test
    @DisplayName("회원 매너 평가 실패 테스트 - USER NOT FOUND")
    void failCreateManner() throws Exception {
        // given
        SiteUser rater = getSiteUser(1L);
        SiteUser taker = getSiteUser(2L);
        MannerRequestDto mannerRequestDto = getMannerRequestDto();
        Manner manner = mannerRequestDto.toEntity(rater, taker);
        // mocking
        lenient().when(mannerRepository.save(any(Manner.class))).thenReturn(manner);
        // when
        MarkethingException exception = assertThrows(MarkethingException.class,
                ()->managerServiceImpl.createManner(mannerRequestDto,rater.getEmail(),taker.getId()));
        // then
        assertEquals(exception.getErrorCode(), ErrorCode.USER_NOT_FOUND);
    }

    private MannerRequestDto getMannerRequestDto() {
        return MannerRequestDto.builder()
                .rate(Rate.BAD)
                .build();
    }

    private static SiteUser getSiteUser(Long id) {
        return SiteUser.builder()
                .id(id)
                .email("mockEmail@gmail.com")
                .password("password")
                .name("name")
                .nickname("nickname")
                .phoneNumber("010-1234-5678")
                .address("address")
                .myLocation(geometryFactory.createPoint(new Coordinate(37.56600357774501, 126.97306266269747)))
                .mannerScore(List.of("0,0,0"))
                .profileImg("profileImg")
                .status(true)
                .authType(AuthType.GENERAL)
                .createdAt(LocalDateTime.now())
                .build();
    }


}
