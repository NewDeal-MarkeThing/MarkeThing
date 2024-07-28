package com.example.demo.chat.controller.view;

import com.example.demo.chat.dto.ChatMessageResponseDto;
import com.example.demo.chat.dto.ChatRoomResponseDto;
import com.example.demo.chat.service.ChatMessageService;
import com.example.demo.chat.service.ChatRoomService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RequiredArgsConstructor
@Controller
public class ChatRoomViewController {
    private final ChatRoomService chatRoomService;
    private final ChatMessageService chatMessageService;


    @GetMapping("/view/chat/rooms")
    public String myChatRoom() {
        return "chat/chatRooms";
    }
    @GetMapping(value = "view/chat/rooms/{chatRoomId}")
    public String getChatRoom(@PathVariable("chatRoomId") Long chatRoomId){
        return "chat/chatRoom";
    }
}
