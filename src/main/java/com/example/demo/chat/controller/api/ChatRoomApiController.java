package com.example.demo.chat.controller.api;


import com.example.demo.chat.dto.ChatMessageResponseDto;
import com.example.demo.chat.dto.ChatRoomRequestDto;
import com.example.demo.chat.dto.ChatRoomResponseDto;
import com.example.demo.chat.dto.ChatRoomStatusResponseDto;
import com.example.demo.chat.service.ChatMessageService;
import com.example.demo.chat.service.ChatRoomService;
import java.security.Principal;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
public class ChatRoomApiController {
    private final ChatRoomService chatRoomService;
    private final ChatMessageService chatMessageService;

    // TODO: requester, request, agent 아이디를 어떻게 전송을 해야하는 지 띵킹
    @PostMapping("api/chat/rooms")
    public void createRoom(@RequestBody ChatRoomRequestDto chatRoomRequestDto) {
        chatRoomService.createChatRoom(chatRoomRequestDto);
    }
    @GetMapping(value = "api/chat/rooms/{chatRoomId}")
    public List<ChatMessageResponseDto> getChatRoom(@PathVariable("chatRoomId") Long chatRoomId) {
        List<ChatMessageResponseDto> chatMessageDtos = chatMessageService.getChatMessages(chatRoomId);
        return chatMessageDtos;
    }
    @GetMapping("/api/chat/rooms")
    public ResponseEntity<List<ChatRoomResponseDto>> getMyChatRooms(Principal principal) {
        String email = principal.getName();
        return ResponseEntity.ok(chatRoomService.getMyChatRooms(email));
    }

    @GetMapping("/api/chat/chatRoomStatus/{chatRoomId}")
    public ResponseEntity<ChatRoomStatusResponseDto> getChatRoomStatus(Principal principal,
            @PathVariable("chatRoomId") Long chatRoomId) {
        String email = principal.getName();
        return ResponseEntity.ok(chatRoomService.getChatRoomStatus(email, chatRoomId));
    }
    @DeleteMapping("/api/chat/rooms/{chatRoomId}")
    public void deleteChatRoom(Principal principal, @PathVariable("chatRoomId") Long chatRoomId){
        chatRoomService.deleteChatRoom(chatRoomId,principal.getName());
    }
    @PostMapping("/api/chat/request/{requestId}")
    public void confirmRequest(@PathVariable("requestId") Long requestId){
        chatRoomService.confirmRequest(requestId);
    }
}