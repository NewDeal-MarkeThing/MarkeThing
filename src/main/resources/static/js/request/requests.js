let index = {
  init: function() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    this.page = parseInt(params.get("page")) || 0;
    this.size = parseInt(params.get("size")) || 5;
    this.sort = $('input[name="sort-filter"]:checked').val() || 'register';

    $("#btn-next").on("click", () => {
      this.nextPage();
    });

    $("#btn-prev").on("click", () => {
      this.prevPage();
    });

    $("#search-button").on("click", () => {
      this.searchByKeyword(this.page, this.size, this.sort);
    });

    $("#nearby-button").on("click", () => {
      this.loadNearbyRequests(this.page, this.size, 3);
    });

    $("#apply-filters").on("click", () => {
      this.page = 0; // 필터 적용 시 페이지를 초기화
      this.sort = $('input[name="sort-filter"]:checked').val() || 'register';
      this.loadPage(this.page, this.size, this.sort);
    });

    this.loadPage(this.page, this.size, this.sort); // 페이지 초기화
  },

  collectFilterData: function() {
    let filters = {
      purchaseRequestStatus: $('#status-filter').val() || null, // 빈 문자열이면 null 반환
      meetupStartDt: $('#meetup-start-date').val(),
      meetupEndDt: $('#meetup-end-date').val()
    };
    return filters;
  },

  // 공통 테이블 생성 함수
  generateTableHtml: function(content) {
    let html = '<table border="1">';
    html += '<tr><th>제목</th><th>내용</th><th>수수료</th><th>약속 시간</th><th>약속 날짜</th><th>약속 장소</th><th>게시자</th><th>시장</th><th>게시일</th></tr>';
    for (let i = 0; i < content.length; i++) {
      html += '<tr>';
      html += `<td><a href="/requests/${content[i].requestId}">${content[i].title}</a></td>`;
      html += `<td>${content[i].content}</td>`;
      html += `<td>${content[i].fee}</td>`;
      html += `<td>${content[i].meetupTime}</td>`;
      html += `<td>${content[i].meetupDate}</td>`;
      html += `<td>${content[i].meetupAddress}</td>`;
      html += `<td>${content[i].nickname}</td>`;
      html += `<td>${content[i].marketName}</td>`;
      html += `<td>${content[i].createdAt}</td>`;
      html += '</tr>';
    }
    html += '</table>';
    return html;
  },

  // 페이지 네비게이션 버튼 생성 함수
  generatePagination: function(totalPages) {
    let html = '';
    for (let i = 0; i < totalPages; i++) {
      html += `<button class="page-button${i === this.page ? ' active' : ''}" data-page="${i}">${i + 1}</button> `;
    }
    $('#pagination').html(html);

    // 페이지 버튼 클릭 이벤트 추가
    $('.page-button').on('click', (e) => {
      const selectedPage = $(e.target).data('page');
      if (selectedPage !== this.page) {
        this.page = selectedPage;
        this.loadPage(this.page, this.size, this.sort);
      }
    });
  },

  loadPage: function(page, size, sort) {
    var token = localStorage.getItem('AuthToken');
    const filters = this.collectFilterData();
    $.ajax({
      url: `/api/requests/list?page=${page}&size=${size}&sort=${sort}`,
      type: 'POST',
      headers: {
        'Authorization': token
      },
      contentType: 'application/json',
      data: JSON.stringify({
        filtersForRequest: filters
      }),
      dataType: 'json',
    }).done((response) => {
      $('#request-list').html(this.generateTableHtml(response.content));
      this.generatePagination(response.totalPages);
    }).fail((error) => {
      console.error(error);
    });
  },

  searchByKeyword: function(page, size, sort) {
    const keyword = $('#keyword-search').val();
    var token = localStorage.getItem('AuthToken');
    $.ajax({
      url: `/api/requests/list/keyword?page=${page}&size=${size}&sort=${sort}`,
      type: 'POST',
      headers: {
        'Authorization': token
      },
      contentType: 'application/json',
      data: JSON.stringify({ keyword: keyword }),
      dataType: 'json',
    }).done((response) => {
      $('#request-list').html(this.generateTableHtml(response.content));
      this.generatePagination(response.totalPages);
    }).fail((error) => {
      console.error(error);
    });
  },

  loadNearbyRequests: function(page, size, distance) {
    var token = localStorage.getItem('AuthToken');
    $.ajax({
      url: `/api/requests/list/map?page=${page}&size=${size}&distance=${distance}`,
      type: 'GET',
      headers: {
        'Authorization': token
      },
      dataType: 'json',
    }).done((response) => {
      $('#request-list').html(this.generateTableHtml(response.content));
      this.generatePagination(response.totalPages);
    }).fail((error) => {
      console.error(error);
    });
  },

  prevPage: function() {
    if (this.page > 0) {
      this.page--;
      this.loadPage(this.page, this.size, this.sort);
    }
  },

  nextPage: function() {
    this.page++;
    this.loadPage(this.page, this.size, this.sort);
  }
};

$(document).ready(function() {
  index.init();
});
