<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>의뢰글 목록 조회</title>
    <style>
      /* 기본 버튼 스타일 */
      .page-button {
        padding: 5px 10px;
        border: 1px solid #ccc;
        margin: 2px;
        cursor: pointer;
        background-color: #f8f9fa;
        display: inline-block;
        text-align: center;
      }

      /* 현재 페이지 스타일 */
      .page-button.active {
        background-color: #007bff;
        color: white;
        border-color: #007bff;
      }

      /* 버튼과 페이지 번호를 일자로 표시 */
      #pagination {
        display: inline-block;
      }

      #pagination button {
        display: inline;
      }
    </style>
</head>
<body>
<div>
    <label for="status-filter"></label>
    <select id="status-filter">
        <option value="">모집상태</option>
        <option value="RECRUITING">모집중</option>
        <option value="IN_PROGRESS">거래 진행중</option>
        <option value="COMPLETED">거래 완료</option>
    </select>

    <label for="meetup-start-date">약속 날짜 시작일: </label>
    <input type="date" id="meetup-start-date">

    <label for="meetup-end-date">약속 날짜 종료일: </label>
    <input type="date" id="meetup-end-date">

    <button id="apply-filters">필터 적용</button>
</div>

<div>
    <label for="keyword-search"></label>
    <input type="text" id="keyword-search">
    <button id="search-button">검색</button>

    <div>
        <label><input type="radio" name="sort-filter" value="fee"> 금액순</label>
        <label><input type="radio" name="sort-filter" value="register"> 등록순</label>
        <label><input type="radio" name="sort-filter" value="meetup"> 마감순</label>
    </div>
</div>

<div>
    <button id="nearby-button">내 근처 게시글 목록 조회</button>
</div>

<!-- 결과 목록을 표시할 영역 -->
<div id="request-list"></div>

<!-- 페이지 네비게이션을 표시할 영역 -->
<div id="pagination-controls">
    <button id="btn-prev-range">이전</button>
    <div id="pagination"></div>
    <button id="btn-next-range">다음</button>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/static/js/paging/paging.js"/>"></script>
<script src="/static/js/request/requests.js"/>"></script>
<script>
  $('#apply-filters').click(function() {
    index.loadPage(0, 5, "register");
  });
</script>
</body>
</html>
