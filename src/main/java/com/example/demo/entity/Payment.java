package com.example.demo.entity;


import java.time.LocalDate;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name = "Payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ORDER_ID", nullable = false)
    private MarketPurchaseRequest purchaseRequest;

    @Column(name = "IMP_UID", nullable = false)
    private String impUid;

    @Column(name = "PAYMENT_METHOD")
    private String paymentMethod;

    @Column(name = "APPLY_NUM")
    private String applyNum;

    @Column(name = "BANK_CODE")
    private String bankCode;

    @Column(name = "BANK_NAME")
    private String bankName;

    @Column(name = "CARD_CODE", nullable = false)
    private String cardCode;

    @Column(name = "CARD_NAME")
    private String cardName;

    @Column(name = "CARD_NUMBER")
    private String cardNumber;

    @Column(name = "CARD_QUOTE")
    private Long cardQuote;

    @Column(name = "NAME")
    private String name;

    @Column(name = "AMOUNT", nullable = false)
    private Long amount;

    @Column(name = "BUYER_NAME")
    private String buyerName;

    @Column(name = "BUYER_EMAIL")
    private String buyerEmail;

    @Column(name = "BUYER_TEL")
    private String buyerTel;

    @Column(name = "STATUS",nullable = false)
    private String status;

    @Column(name = "STARTED_AT")
    private LocalDate startedAt;

    @Column(name = "PAID_AT")
    private LocalDate paidAt;

    @Column(name = "FAILED_AT")
    private LocalDate failedAt;

    @Column(name = "FAIL_REASON")
    private String failReason;

    @Column(name = "RECEIPT_URL")
    private String receiptUrl;

    @Column(name = "CASH_RECEIPT_ISSUE")
    private String cashReceiptIssue;

    @Column(name = "BUYER_ADDR",nullable = false)
    private Long buyerAddr;

    @OneToMany(mappedBy = "payment")
    private List<PaymentCancelDetail> paymentCancelDetails;

    @CreatedDate
    @Column(name = "CREATED_AT",nullable = false)
    private LocalDate createdAt;

    @LastModifiedDate
    @Column(name = "UPDATED_AT")
    private LocalDate updatedAt;
}
