<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>시장 목록 조회</title>
    <!-- Select2 CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
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
    <label for="sido-filter"></label>
    <select id="sido-filter">
        <option value="">시/도</option>
        <option value="00">전체</option>
        <option value="01">서울</option>
        <option value="02">경기</option>
        <option value="03">인천</option>
        <option value="04">강원</option>
        <option value="05">대전</option>
        <option value="06">충남</option>
        <option value="07">충북</option>
        <option value="08">부산</option>
        <option value="09">울산</option>
        <option value="10">대구</option>
        <option value="11">경북</option>
        <option value="12">경남</option>
        <option value="13">광주</option>
        <option value="14">전남</option>
        <option value="15">전북</option>
        <option value="16">세종</option>
        <option value="17">제주</option>
    </select>

    <label for="sigungu-filter"></label>
    <select id="sigungu-filter" style="width: 50%" multiple="multiple"> <!-- 시/군/구 옵션이 동적으로 추가됩니다 -->
    </select>

    <button id="apply-filters">필터 적용</button>
</div>

<!-- 결과 목록을 표시할 영역 -->
<div id="market-list"></div>

<!-- 페이지 네비게이션을 표시할 영역 -->
<div id="pagination-controls">
    <button id="btn-prev-range">이전</button>
    <div id="pagination"></div>
    <button id="btn-next-range">다음</button>
</div>
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Select2 JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>

<script src="/static/js/paging/paging.js"/>"></script>
<script src="/static/js/request/markets.js"/>"></script>
<script>
  $('#apply-filters').click(function() {
    index.loadMarkets(0, 5, "name");
  });
</script>
</body>
</html>
