let index = {
  sigunguData: {},
  page: 0,
  size: 5,
  sort: 'name',
  currentPageRange: 5,
  totalPages: 0,

  init() {
    this.sigunguData = this.getSigunguData();
    this.loadParams();
    this.setupEventListeners();
    this.setupPaginationHandler();
    this.loadMarkets(this.page, this.size, this.sort);
  },

  setupPaginationHandler() {
    paginationHandler.onPageChange = () => {
      this.page = paginationHandler.page;
      this.loadMarkets(this.page, this.size, this.sort);
    };

    $("#btn-next-range").on("click", () => paginationHandler.nextPageRange());
    $("#btn-prev-range").on("click", () => paginationHandler.prevPageRange());
  },

  getSigunguData() {
    return {
      "01": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "종로구"},
        {value: "002", text: "중구"},
        {value: "003", text: "용산구"},
        {value: "004", text: "성동구"},
        {value: "005", text: "광진구"},
        {value: "006", text: "동대문구"},
        {value: "007", text: "중랑구"},
        {value: "008", text: "성북구"},
        {value: "009", text: "강북구"},
        {value: "010", text: "도봉구"},
        {value: "011", text: "노원구"},
        {value: "012", text: "은평구"},
        {value: "013", text: "서대문구"},
        {value: "014", text: "마포구"},
        {value: "015", text: "양천구"},
        {value: "016", text: "강서구"},
        {value: "017", text: "구로구"},
        {value: "018", text: "금천구"},
        {value: "019", text: "영등포구"},
        {value: "020", text: "동작구"},
        {value: "021", text: "관악구"},
        {value: "022", text: "서초구"},
        {value: "023", text: "강남구"},
        {value: "024", text: "송파구"},
        {value: "025", text: "강동구"}
      ],
      "02": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "수원시"},
        {value: "002", text: "성남시"},
        {value: "003", text: "의정부시"},
        {value: "004", text: "안양시"},
        {value: "005", text: "부천시"},
        {value: "006", text: "광명시"},
        {value: "007", text: "평택시"},
        {value: "008", text: "동두천시"},
        {value: "009", text: "안산시"},
        {value: "010", text: "고양시"},
        {value: "011", text: "과천시"},
        {value: "012", text: "의왕시"},
        {value: "013", text: "구리시"},
        {value: "014", text: "남양주시"},
        {value: "015", text: "오산시"},
        {value: "016", text: "시흥시"},
        {value: "017", text: "군포시"},
        {value: "018", text: "하남시"},
        {value: "019", text: "용인시"},
        {value: "020", text: "파주시"},
        {value: "021", text: "이천시"},
        {value: "022", text: "안성시"},
        {value: "023", text: "김포시"},
        {value: "024", text: "화성시"},
        {value: "025", text: "광주시"},
        {value: "026", text: "양주시"},
        {value: "027", text: "포천시"},
        {value: "028", text: "여주시"},
        {value: "029", text: "연천군"},
        {value: "030", text: "가평군"},
        {value: "031", text: "양평군"}
      ],
      "03": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "중구"},
        {value: "002", text: "동구"},
        {value: "003", text: "미추홀구"},
        {value: "004", text: "연수구"},
        {value: "005", text: "남동구"},
        {value: "006", text: "부평구"},
        {value: "007", text: "계양구"},
        {value: "008", text: "서구"},
        {value: "009", text: "강화군"},
        {value: "010", text: "웅진군"}
      ],
      "04": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "춘천시"},
        {value: "002", text: "원주시"},
        {value: "003", text: "강릉시"},
        {value: "004", text: "동해시"},
        {value: "005", text: "태백시"},
        {value: "006", text: "속초시"},
        {value: "007", text: "삼척시"},
        {value: "008", text: "홍천군"},
        {value: "009", text: "횡성군"},
        {value: "010", text: "영월군"},
        {value: "011", text: "평창군"},
        {value: "012", text: "정선군"},
        {value: "013", text: "칠원군"},
        {value: "014", text: "화천군"},
        {value: "015", text: "양구군"},
        {value: "016", text: "인제군"},
        {value: "017", text: "고성군"},
        {value: "018", text: "양양군"}
      ],
      "05": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "동구"},
        {value: "002", text: "중구"},
        {value: "003", text: "서구"},
        {value: "004", text: "유성구"},
        {value: "005", text: "대덕구"}
      ],
      "06": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "천안시"},
        {value: "002", text: "공주시"},
        {value: "003", text: "보령시"},
        {value: "004", text: "아산시"},
        {value: "005", text: "서산시"},
        {value: "006", text: "논산시"},
        {value: "007", text: "계룡시"},
        {value: "008", text: "당진시"},
        {value: "009", text: "금산군"},
        {value: "010", text: "부여군"},
        {value: "011", text: "서천군"},
        {value: "012", text: "청양군"},
        {value: "013", text: "홍성군"},
        {value: "014", text: "예산군"},
        {value: "015", text: "태안군"}
      ],
      "07": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "청주시"},
        {value: "002", text: "충주시"},
        {value: "003", text: "제천시"},
        {value: "004", text: "보은군"},
        {value: "005", text: "옥천군"},
        {value: "006", text: "영동군"},
        {value: "007", text: "증평군"},
        {value: "008", text: "진천군"},
        {value: "009", text: "괴산군"},
        {value: "010", text: "음성군"},
        {value: "011", text: "단양군"}
      ],
      "08": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "중구"},
        {value: "002", text: "서구"},
        {value: "003", text: "동구"},
        {value: "004", text: "영도구"},
        {value: "005", text: "부산진구"},
        {value: "006", text: "동래구"},
        {value: "007", text: "남구"},
        {value: "008", text: "북구"},
        {value: "009", text: "해운대구"},
        {value: "010", text: "사하구"},
        {value: "011", text: "금정구"},
        {value: "012", text: "강서구"},
        {value: "013", text: "연제구"},
        {value: "014", text: "수영구"},
        {value: "015", text: "사상구"},
        {value: "016", text: "기장군"}
      ],
      "09": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "중구"},
        {value: "002", text: "남구"},
        {value: "003", text: "동구"},
        {value: "004", text: "북구"},
        {value: "005", text: "울주군"}
      ],
      "10": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "중구"},
        {value: "002", text: "동구"},
        {value: "003", text: "서구"},
        {value: "004", text: "남구"},
        {value: "005", text: "북구"},
        {value: "006", text: "수성구"},
        {value: "007", text: "달서구"},
        {value: "008", text: "달성군"}
      ],
      "11": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "포항시"},
        {value: "002", text: "경주시"},
        {value: "003", text: "김천시"},
        {value: "004", text: "안동시"},
        {value: "005", text: "구미시"},
        {value: "006", text: "영주시"},
        {value: "007", text: "영천시"},
        {value: "008", text: "상주시"},
        {value: "009", text: "문경시"},
        {value: "010", text: "경산시"},
        {value: "011", text: "군위군"},
        {value: "012", text: "의성군"},
        {value: "013", text: "청송군"},
        {value: "014", text: "영양군"},
        {value: "015", text: "영덕군"},
        {value: "016", text: "청도군"},
        {value: "017", text: "고령군"},
        {value: "018", text: "성주군"},
        {value: "019", text: "칠곡군"},
        {value: "020", text: "예천군"},
        {value: "021", text: "봉화군"},
        {value: "022", text: "울진군"},
        {value: "023", text: "울릉군"}
      ],
      "12": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "창원시"},
        {value: "002", text: "진주시"},
        {value: "003", text: "통영시"},
        {value: "004", text: "사천시"},
        {value: "005", text: "김해시"},
        {value: "006", text: "밀양시"},
        {value: "007", text: "거제시"},
        {value: "008", text: "양산시"},
        {value: "009", text: "의령군"},
        {value: "010", text: "함안군"},
        {value: "011", text: "창녕군"},
        {value: "012", text: "고성군"},
        {value: "013", text: "남해군"},
        {value: "014", text: "하동군"},
        {value: "015", text: "산청군"},
        {value: "016", text: "함양군"},
        {value: "017", text: "거창군"},
        {value: "018", text: "합천군"}
      ],
      "13": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "동구"},
        {value: "002", text: "서구"},
        {value: "003", text: "남구"},
        {value: "004", text: "북구"},
        {value: "005", text: "광산구"}
      ],
      "14": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "목포시"},
        {value: "002", text: "여수시"},
        {value: "003", text: "순천시"},
        {value: "004", text: "나주시"},
        {value: "005", text: "광양시"},
        {value: "006", text: "담양군"},
        {value: "007", text: "곡성군"},
        {value: "008", text: "구례군"},
        {value: "009", text: "고흥군"},
        {value: "010", text: "보성군"},
        {value: "011", text: "화순군"},
        {value: "012", text: "장흥군"},
        {value: "013", text: "강진군"},
        {value: "014", text: "해남군"},
        {value: "015", text: "영암군"},
        {value: "016", text: "무안군"},
        {value: "017", text: "함평군"},
        {value: "018", text: "영광군"},
        {value: "019", text: "장성군"},
        {value: "020", text: "완도군"},
        {value: "021", text: "진도군"},
        {value: "022", text: "신안군"}
      ],
      "15": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "전주시"},
        {value: "002", text: "군산시"},
        {value: "003", text: "익산시"},
        {value: "004", text: "정읍시"},
        {value: "005", text: "남원시"},
        {value: "006", text: "김제시"},
        {value: "007", text: "완주군"},
        {value: "008", text: "진안군"},
        {value: "009", text: "무주군"},
        {value: "010", text: "장수군"},
        {value: "011", text: "임실군"},
        {value: "012", text: "순창군"},
        {value: "013", text: "고창군"},
        {value: "014", text: "부안군"}
      ],
      "16": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "세종시"}
      ],
      "17": [
        {value: "", text: "시/군/구"},
        {value: "000", text: "전체"},
        {value: "001", text: "제주시"},
        {value: "002", text: "서귀포시"}
      ]
    };
  },

  loadParams() {
    const params = new URLSearchParams(window.location.search);
    this.page = parseInt(params.get("page")) || 0;
    this.size = parseInt(params.get("size")) || 5;
    this.sort = $('input[name="sort-filter"]:checked').val() || 'name';
  },

  setupEventListeners() {
    $('#sido-filter').on('change', () => this.updateSigunguFilter());

    $("#apply-filters").on("click", () => {
      this.page = 0;
      this.sort = $('input[name="sort-filter"]:checked').val() || 'name';
      this.loadMarkets(this.page, this.size, this.sort);
    });
  },

  updateSigunguFilter() {
    const sidoValue = $('#sido-filter').val();
    const sigunguFilter = $('#sigungu-filter');

    sigunguFilter.empty();
    const options = this.sigunguData[sidoValue] || [{
      value: "",
      text: "선택해 주세요"
    }];

    options.forEach(({value, text}) => {
      sigunguFilter.append(new Option(text, value));
    });

    sigunguFilter.select2({
      placeholder: "시군구 선택",
      allowClear: true
    }).trigger('change');
  },

  generateTableHtml(content) {
    const rows = content.map(item => `
      <tr>
        <td><a href="의뢰글 작성 jsp로 연결">${item.marketName}</a></td>
        <td>${item.roadAddress}</td>
        <td>${item.streetAddress}</td>
        <td>${item.marketType}</td>
      </tr>
    `).join('');

    return `
      <table border="1">
        <tr><th>시장명</th><th>도로명 주소</th><th>지번 주소</th><th>시장 종류</th></tr>
        ${rows}
      </table>
    `;
  },

  loadMarkets(page, size, sort) {
    const selectedSigungu = $('#sigungu-filter').val();
    const filters = {
      sidoId: $('#sido-filter').val(),
      sigunguIds: selectedSigungu || []
    };

    const token = localStorage.getItem('AuthToken');

    $.ajax({
      url: `/api/requests/markets/list?page=${page}&size=${size}&sort=${sort}`,
      type: 'POST',
      headers: {'Authorization': token},
      contentType: 'application/json',
      data: JSON.stringify({filtersForMarket: filters}),
      dataType: 'json',
    }).done((response) => {
      $('#market-list').html(this.generateTableHtml(response.content));
      paginationHandler.generatePagination(response.totalPages);
    }).fail((error) => {
      console.error(error);
    });
  }
};

$(document).ready(() => index.init());
