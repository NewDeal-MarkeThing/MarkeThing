// Index 객체 정의
let index = {
  init: function() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    this.page = parseInt(params.get("page")) || 0;
    this.size = parseInt(params.get("size")) || 5;
    this.sort = $('input[name="sort-filter"]:checked').val() || 'register';

    // Pagination handler 초기화
    this.setupPaginationHandler();

    // 버튼 클릭 이벤트 핸들러 설정
    $("#search-button").on("click", () => this.searchByKeyword());
    $("#nearby-button").on("click", () => this.loadNearbyRequests(3));
    $("#apply-filters").on("click", () => {
      this.page = 0; // 필터 적용 시 페이지를 초기화
      this.sort = $('input[name="sort-filter"]:checked').val() || 'register';
      this.loadPage();
    });

    // 페이지 로드
    this.loadPage();
  },

  collectFilterData: function() {
    return {
      purchaseRequestStatus: $('#status-filter').val() || null,
      meetupStartDt: $('#meetup-start-date').val(),
      meetupEndDt: $('#meetup-end-date').val()
    };
  },

  generateTableHtml: function(content) {
    let html = '<table border="1">';
    html += '<tr><th>제목</th><th>내용</th><th>수수료</th><th>약속 시간</th><th>약속 날짜</th><th>약속 장소</th><th>게시자</th><th>시장</th><th>게시일</th></tr>';
    content.forEach(item => {
      html += `<tr>
                 <td><a href="/requests/${item.requestId}">${item.title}</a></td>
                 <td>${item.content}</td>
                 <td>${item.fee}</td>
                 <td>${item.meetupTime}</td>
                 <td>${item.meetupDate}</td>
                 <td>${item.meetupAddress}</td>
                 <td>${item.nickname}</td>
                 <td>${item.marketName}</td>
                 <td>${item.createdAt}</td>
               </tr>`;
    });
    html += '</table>';
    return html;
  },

  loadPage: function() {
    const filters = this.collectFilterData();
    this.loadData('/api/requests/list', 'POST', { filtersForRequest: filters });
  },

  searchByKeyword: function() {
    const keyword = $('#keyword-search').val();
    this.loadData('/api/requests/list/keyword', 'POST', { keyword: keyword });
  },

  loadNearbyRequests: function(distance) {
    this.loadData(`/api/requests/list/map?page=${this.page}&size=${this.size}&distance=${distance}`, 'GET');
  },

  applyFilters: function() {
    this.page = 0; // 필터 적용 시 페이지를 초기화
    this.sort = $('input[name="sort-filter"]:checked').val() || 'register';
    this.loadPage();
  },

  loadData: function(url, type, data = {}) {
    const token = localStorage.getItem('AuthToken');
    $.ajax({
      url: `${url}?page=${this.page}&size=${this.size}&sort=${this.sort}`,
      type: type,
      headers: { 'Authorization': token },
      contentType: 'application/json',
      data: JSON.stringify(data),
      dataType: 'json',
    }).done(response => {
      $('#request-list').html(this.generateTableHtml(response.content));
      paginationHandler.generatePagination(response.totalPages); // 페이지네이션 업데이트
    }).fail(error => {
      console.error(error);
    });
  },

  setupPaginationHandler: function() {
    paginationHandler.page = this.page;
    paginationHandler.size = this.size;
    paginationHandler.sort = this.sort;
    paginationHandler.onPageChange = () => {
      this.page = paginationHandler.page;
      this.loadPage();
    };

    $("#btn-next-range").on("click", () => paginationHandler.nextPageRange());
    $("#btn-prev-range").on("click", () => paginationHandler.prevPageRange());
  }
};

// 문서 준비 완료 시 초기화 함수 호출
$(document).ready(function() {
  index.init();
});
