function connect() {
  var socket = new SockJS('/ws');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/sub/chat/room/' + chatRoomId,
        function (messageOutput) {
          showMessage(JSON.parse(messageOutput.body));
        });
  }, function (error) {
    console.error('STOMP error:', error);
  });
}

function sendMsg() {
  var message = {
    chatRoomId: chatRoomId,
    senderId: senderId,
    content: $('#msg').val()
  };
  stompClient.send("/pub/sendMessage", {}, JSON.stringify(message));
  $('#msg').val('');
}

function showMessage(message) {
  var messageElement = document.createElement('div');
  messageElement.className = 'message';
  var messageTime = document.createElement('div');
  messageTime.className = 'message-time';

  if (message.senderId == senderId) {
    messageElement.classList.add('own-message');
  } else {
    messageElement.classList.add('other-message');
  }
  messageElement.innerText = message.content;
  messageTime.innerText = message.time ? message.time : formatAMPM(new Date());

  messageElement.appendChild(messageTime);
  document.getElementById('messages').appendChild(messageElement);
  document.getElementById('messages').scrollTop = document.getElementById(
      'messages').scrollHeight;
}

function handleKeyPress(event) {
  if (event.keyCode === 13) { // 13 is the key code for Enter
    sendMsg();
  }
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? '오후' : '오전';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function fetchChatMessages() {
  $.ajax({
    url: "/api/chat/rooms/" + chatRoomId,
    type: 'GET',
    success: function (chatMessages) {
      chatMessages.forEach(function (chatMessage) {
        showMessage(chatMessage);
      });
    },
    error: function (error) {
      console.error('Error fetching chat messages:', error);
      alert("채팅 메시지를 가져오는 중에 오류가 발생했습니다: " + error.responseText);
    }
  });
}

const urlPath = window.location.pathname;
const chatRoomId = urlPath.split('/').pop(); // URL의 마지막 부분에서 chatRoomId 추출
// 전역 변수 선언
let senderId;
let roomStatus;
$(document).ready(function () {
  var token = localStorage.getItem('AuthToken');
  // 채팅방 상태 가져오기
  $.ajax({
    url: "/api/chat/chatRoomStatus/"+chatRoomId, // 절대 경로로 변경
    method: 'GET',
    headers: {
      'Authorization': token // 가져온 토큰을 Authorization 헤더에 포함
    },
    success: function(response) {
      // 응답에서 senderId와 roomStatus를 전역 변수로 설정
      senderId = response.senderId;
      roomStatus = response.roomStatus;
      // 채팅방 상태에 따른 UI 업데이트
      if (roomStatus === 1) {
        $('#msg').prop('disabled', true);
        $('#send-btn').addClass('disabled-btn').prop('disabled', true);
        $('.left-chat-room').show(); // 상대방이 나갔다는 메시지 표시
      } else {
        fetchChatMessages(); // 초기 채팅 메시지 로드
        connect(); // 채팅 서버에 연결
        document.getElementById('messages').scrollTop = document.getElementById(
            'messages').scrollHeight;
      }
    },
    error: function(error) {
      console.error('Error fetching chat room status:', error);
    }
  });
});
