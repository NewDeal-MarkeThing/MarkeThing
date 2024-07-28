// 페이지 로드 시 채팅방 목록을 가져옴
$(document).ready(function() {
  fetchMyChatRooms();
});
function navigateToChatRoom(chatRoomId, userId) {
  window.location.href = "/view/chat/rooms/" + chatRoomId;
}
function fetchMyChatRooms() {
  var token = localStorage.getItem('AuthToken');
  $.ajax({
    url: "/api/chat/rooms/", // 채팅방 정보를 가져오는 API 엔드포인트
    type: 'GET',
    headers: {
      'Authorization': token // 가져온 토큰을 Authorization 헤더에 포함
    },
    success: function (chatRooms) {
      var chatRoomsContainer = $("#chat-rooms");
      chatRoomsContainer.empty(); // 기존 내용을 비움
      chatRooms.forEach(function (chatRoom) {
        var chatRoomElement = `
                        <div id="chat-room-${chatRoom.chatRoomId}" class="chat-room" onclick="navigateToChatRoom(${chatRoom.chatRoomId}, ${chatRoom.userId})">
                            <div class="chat-room-info">
                                <div class="chat-room-title">${chatRoom.title}</div>
                                <div class="chat-room-message">${chatRoom.lastChatMessage}</div>
                                <div class="chat-room-time">${chatRoom.time}</div>
                            </div>
                            <button class="leave-button" onclick="event.stopPropagation(); leaveChatRoom(${chatRoom.chatRoomId});">Leave</button>
                        </div>
                    `;
        chatRoomsContainer.append(chatRoomElement);
      });
    },
    error: function (error) {
      console.error('Error fetching chat rooms:', error);
      alert("채팅방 정보를 가져오는 중에 오류가 발생했습니다: " + error.responseText);
    }
  });
}
function leaveChatRoom(chatRoomId) {
  var token = localStorage.getItem('AuthToken');
    $.ajax({
      url: `/api/chat/rooms/${chatRoomId}`,
      headers: {
        'Authorization': token // 가져온 토큰을 Authorization 헤더에 포함
      },
      method: 'DELETE',
      success: function() {
        alert("채팅방 나가기 완료");
        console.log("Left chat room with ID: " + chatRoomId);
        // DOM에서 채팅방 요소 제거
        $("#chat-room-" + chatRoomId).remove();
        // 현재 페이지 새로고침
        window.location.reload();
      },
      error: function(error) {
        console.error("Failed to leave chat room with ID: " + chatRoomId, error);
      }
    });
}