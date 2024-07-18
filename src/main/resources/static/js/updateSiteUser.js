$(document).ready(function () {
  // 페이지가 로드될 때 실행할 코드
  fetchUserInfo();

  // 회원 정보를 가져오는 함수
  function fetchUserInfo() {
    var token = localStorage.getItem('AuthToken');
    $.ajax({
      url: "/api/users/information", // 현재 사용자 정보를 가져오는 API 엔드포인트
      type: 'GET',
      headers: {
        'Authorization': token // 가져온 토큰을 Authorization 헤더에 포함
      },
      success: function (user) {
        // 가져온 회원 정보를 폼 필드에 채우기
        $("#nickname").val(user.nickname);
        $("#phoneNumber").val(user.phoneNumber);
        $("#address").val(user.address);
        $("#profilePictureDisplay").attr("src", user.profileImg);
      },
      error: function (error) {
        console.error('Error fetching user information:', error);
        $("#message").text("회원 정보를 가져오는 중에 오류가 발생했습니다: " + error.responseText);
      }
    });
  }

  // 폼 제출 시 처리
  $("#updateForm").submit(function (event) {
    event.preventDefault(); // 기본 동작 중단

    var formData = {
      nickname: $("#nickname").val(),
      phoneNumber: $("#phoneNumber").val(),
      address: $("#address").val(),
      profileImg: $("#profileLink").val() || "" // 프로필 링크가 없으면 빈 문자열
    };
    var token = localStorage.getItem('AuthToken');
    $.ajax({

      url: "/api/users", // 회원 정보 업데이트를 처리하는 API 엔드포인트
      type: 'PATCH',
      headers: {
        'Authorization': token // 가져온 토큰을 Authorization 헤더에 포함
      },
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (response) {
        // 회원 정보 수정 성공 시 처리
        $("#message").text("회원 정보가 수정되었습니다.");
      },
      error: function (error) {
        $("#message").text("회원 정보 수정에 실패했습니다: " + error.responseText);
      }
    });
  });

  // 파일 선택 시 파일 이름 표시
  $("#profilePicture").change(function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).next(".custom-file-label").html(fileName);
  });

  // 프로필 사진 업로드 처리
  $("#uploadButton").click(function () {
    var file = $("#profilePicture")[0].files[0];
    var formData = new FormData();
    formData.append("file", file);

    $.ajax({
      url: "/api/upload", // 프로필 사진 업로드를 처리하는 API 엔드포인트
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        $("#profileLink").val(data);
        // 업로드된 프로필 사진을 화면에 표시
        $("#profilePictureDisplay").attr("src", data);
        $("#message").text("프로필 사진이 업로드되었습니다.");
      },
      error: function (error) {
        $("#message").text("프로필 사진 업로드에 실패했습니다: " + error.responseText);
      }
    });
  });
});