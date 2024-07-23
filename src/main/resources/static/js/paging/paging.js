let paginationHandler = {
  currentPageRange: 5, // 기본 페이지 범위 설정
  page: 0, // 현재 페이지 초기화
  size: 5, // 기본 페이지 크기 설정
  sort: 'register', // 기본 정렬 기준 설정
  totalPages: 0, // 총 페이지 수 초기화
  onPageChange: function() {}, // 페이지 변경 시 호출할 콜백 함수

  generatePagination: function (totalPages) {
    this.totalPages = totalPages; // 총 페이지 수 저장
    const startPage = Math.floor(this.page / this.currentPageRange) * this.currentPageRange;
    const endPage = Math.min(totalPages - 1, startPage + this.currentPageRange - 1);

    let html = '';
    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="page-button${i === this.page ? ' active' : ''}"
                      data-page="${i}">${i + 1}</button>`;
    }
    $('#pagination').html(html);

    // '다음 페이지'와 '이전 페이지' 버튼 표시
    $('#pagination-controls').find('#btn-prev-range').toggle(startPage > 0);
    $('#pagination-controls').find('#btn-next-range').toggle(endPage < totalPages - 1);

    // 페이지 버튼 클릭 이벤트 추가
    $('.page-button').on('click', (e) => {
      const selectedPage = $(e.target).data('page');
      if (selectedPage !== this.page) {
        this.page = selectedPage;
        this.onPageChange(); // 페이지 변경 시 콜백 함수 호출
      }
    });
  },

  prevPageRange: function () {
    // 페이지 범위를 뒤로 이동
    const startPage = Math.floor(this.page / this.currentPageRange) * this.currentPageRange;
    const newPage = Math.max(startPage - this.currentPageRange, 0);
    if (newPage !== startPage) {
      this.page = newPage;
      this.onPageChange(); // 페이지 변경 시 콜백 함수 호출
      this.generatePagination(this.totalPages);
    }
  },

  nextPageRange: function () {
    // 페이지 범위를 앞으로 이동
    const startPage = Math.floor(this.page / this.currentPageRange) * this.currentPageRange;
    const newPage = Math.min(startPage + this.currentPageRange, this.totalPages - this.currentPageRange);
    if (newPage !== startPage) {
      this.page = newPage;
      this.onPageChange(); // 페이지 변경 시 콜백 함수 호출
      this.generatePagination(this.totalPages);
    }
  }
};
