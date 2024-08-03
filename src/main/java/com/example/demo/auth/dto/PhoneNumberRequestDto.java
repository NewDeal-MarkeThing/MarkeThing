package com.example.demo.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PhoneNumberRequestDto {
    private String phoneNumber;
    private String userEmail;

    public PhoneNumberRequestDto(String number) {
        this.phoneNumber = number;
    }
}
