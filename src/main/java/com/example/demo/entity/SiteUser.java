package com.example.demo.entity;

import com.example.demo.auth.dto.SignupDto;
import com.example.demo.type.AuthType;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
@EntityListeners(AuditingEntityListener.class)
@Table(name= "SITE_USER")
public class SiteUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "EMAIL", unique = true, nullable = false)
    private String email;

    @Column(name = "PASSWORD", length = 50, nullable = false)
    private String password;

    @Column(name = "NAME", length = 50, nullable = false)
    private String name;

    @Column(name = "NICKNAME", length = 50, nullable = false)
    private String nickname;

    @Column(name = "PHONE_NUMBER", length = 50, nullable = false)
    private String phoneNumber;

    @Column(name = "ADDRESS", length = 50, nullable = false)
    private String address;

    @Column(name = "MANNER_SCORE")
    private Integer mannerScore;

    @Column(name = "PROFILE_IMG", length = 1023, nullable = false)
    private String profileImg;

    @Column(name = "STATUS", nullable = false)
    private boolean status;

    @Enumerated(EnumType.STRING)
    @Column(name = "AUTH_TYPE", length = 50, nullable = false)
    private AuthType authType; //회원의 가입 상태.

    @OneToMany(mappedBy = "siteUser")
    private List<Community> communities;

    @OneToMany(mappedBy = "siteUser")
    private List<Comment> comments;

    @OneToMany(mappedBy = "siteUser")
    private List<ReplyComment> replyComments;

    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Manner> agents;

    // 평가를 한 목록
    @OneToMany(mappedBy = "requester", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Manner> requesters;

    @OneToMany(mappedBy = "siteUser")
    private List<MarketPurchaseRequest> purchaseRequests;

    @OneToMany(mappedBy = "siteUser")
    private List<ChatMessage> chatMessages;

    @OneToOne(mappedBy = "siteUser")
    private RequestSuccess success;

    @OneToOne(mappedBy = "siteUser")
    private Account account;

    @OneToOne(mappedBy = "siteUser")
    private RequestSuccess requestSuccess;

    @OneToOne(mappedBy = "requester")
    private ChatRoom requester;

    @OneToOne(mappedBy = "agent")
    private ChatRoom agent;

    @CreatedDate
    @Column(name = "CREATED_AT",nullable = false)
    private LocalDate createdAt;

    @LastModifiedDate
    @Column(name = "UPDATED_AT")
    private LocalDate updatedAt;


    public static SiteUser fromDto(SignupDto signupDto){
        return SiteUser.builder()
                .email(signupDto.getEmail())
                .password(signupDto.getPassword())
                .name(signupDto.getName())
                .nickname(signupDto.getNickname())
                .phoneNumber(signupDto.getPhoneNumber())
                .address(signupDto.getAddress())
                .build(); //user 테이블 creat
    }
}
