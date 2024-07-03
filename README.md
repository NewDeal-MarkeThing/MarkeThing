# 💝프로젝트명 : MarkeThing

#### 프로젝트 설명 :
##### 프로젝트 기간: 24.6.26 ~ 24.7.26
<img >

#####  서버 배포: 

##### BE Github : [https://github.com/codingshoppingmall8/BE]

## 👨‍👦‍👦Team Members
**[FE]** <br>
**[BE] Kang-ye-Seul Park-Hyun-Jin Park-So-Yoeng Baek-Sang-Eun,**

## ⚒Tech Stack
<img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"/>
<img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white"/>
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white"/>
<img src="https://img.shields.io/badge/kakaotalk-ffcd00.svg?style=for-the-badge&logo=kakaotalk&logoColor=000000"/>
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"/>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC.svg?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon Web Service-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"/>

## 💾ERD
![image](https://user-images.githubusercontent.com/67679972/190326599-51dfb9a8-8e60-45f8-85ea-711b7c2f26cc.png)
<br>

## 📃api명세서
링크 : https://nonchalant-sturgeon-21a.notion.site/8-d8cd94d7525843618ebc766da876d5d0
|기능|메소드|URL|
|------|---|---|
|이메일중복체크|GET|api/member/signup|
|회원가입|POST|api/member/signup|
|로그인|POST|api/member/login|
|카카오 로그인|GET|api/member/kakao|
|메인페이지 가져오기|GET|api/post?page=|
|메인페이지 정렬|GET|api/sort_post?page= &sort_method=|
|카테고리별로 가져오기|GET|api/post_category?page=&cate_no=|
|카테고리별로 정렬|GET|api/post_category?page=&cate_n&sort_method=|
|상세페이지 가져오기|GET|api/post/{id}|
|마이페이지 가져오기|GET|api/member/mypage|
|마이페이지 수정|POST|api/member/mypage|
|장바구니 담기|POST|api/member/cart/{id}|
|장바구니 조회|GET|api/member/cart|
|장바구니 삭제|DELETE|api/member/cart|
|장바구니 전체삭제|DELETE|api/member/cart/deleteAll|
|게시글 등록|GET|api/member/cart|
|게시글 삭제|DELETE|api/member/cart{id}|
<br>


## 📖기능 구현 List

1. **회원가입**
    - **Email 중복 검사**
    - **Email 유효성 검사**
    - **PW 및 PW Confirm 유효성 검사**
    - **휴대전화 유효성 검사**
    
2. **로그인**
    - **Email, PW 입력시 공백 유효성 검사**
    - **Email, PW 일치 검사**
    - **Access Token과 Refresh Token을 Cookie에 저장하고 interceptor 사용
       모든 페이지에서 로그인 유지**
    - **소셜 로그인 구현(카카오) Token을 localStorage에 저장**   
3. **마이페이지**
    - **회원 정보 수정 (이름, 주소, 휴대전화)**
    
4. **메인 페이지**
   - **상품 카테고리별 정렬**
    - **Pagination**
    - **신상품/상품명/낮은가격/높은가격/조회수 정렬**
    - **css(스크롤시 헤더 고정, grid, 반응형 웹페이지)**
    
5. **장바구니**
    - **장바구니에 상품 추가, 개별 삭제**
    - **checkbox 전체 선택, 해제, 선택 삭제**
    - **장바구니 비우기 (목록 전체 삭제)**


-----------------

## Front) 😡TroubleShooting 

- A component is changing a controlled input to be uncontrolled.    
    원인) input 태그의 value 초기값이 undefined였다가 렌더링 후에 값이 들어와 바뀌면서 발생한 에러    
    해결) input 태그 value에 공백을 줘서 ||'' controlled input의 범주에 포함시켜주면 됨    
        예) value={arr[i]|| ''}    
   
- 장바구니 목록에서 개별 삭제가 안 됨 400에러    
    원인) payload를 잘못 보냄    
    해결) axios.delete는 data를 body에 담을 때 data:{}로 감싸서 보내줘야 한다고 함.    
-
    
- 
        };
	```     
      
## Back) 😡TroubleShooting  

- postman으로 Long 타입 리스트를 주는데 controller에서 그 값을 못 받음    
    원인) postman에서는 json형식으로 list를 제공하는데 일반 List 객체는 이값을 받지 못함. <br>
    해결) Long타입 List를 가지는 dto 클래스를 생성하고 controller에서 이 dto를 통해 List를 전달받음.
    
- page로 정렬된 게시글 리스트들을 return할 때 불필요한 값들까지 return됨(ex createdAt,cnt..post의 field들)   
    원인) Post형 Page들을 리턴을 하기 때문에 발생한 문제.<br>
    해결) 먼저 post에서 필요한 정보들을 받는 dto객체를 생성을 하고 클래스 내부에 post객체를 받으면 dto List를 반환하는
          메소드를 작성. 이를 이용해서 Page<Post>를 반환을 하는 것이 아니라 Page<Postdto>를 반환함.
    
- 카카오 로그인시 Kakao Rest API "Redirect URI mismatch." 에러   
    원인) 프론트엔드에서 인가코드 받을때 Redirect URI가 백엔드에서 액세스토큰을 받을때 Redirect URI이 달라서 생긴 문제.<br>
    해결) 액세스 토큰을 받을때 Redirect URI을   프론트와 똑같이 해줌으로써 해결<br>
       예) ("redirect_uri", "http://localhost:8080/kakao")  ->  ("redirect_uri", "http://localhost:3030/kakao") 

- 쇼핑몰에 존재하는 1000가지 이상의 데이터 가져오는 방법
     쇼핑몰에 있는 상품 정보를 일일이 수작업으로 가져오는건 비효율적이라고 판단하여 파이썬으로 쇼핑몰에 있는 상품 정보를 크롤링하여 서버 DB에다 저장하였다.<br>
     따라서 수작업으로 하실 예상소유시간 6시간 걸리는 작업을 30분으로 축소항 수 있음<br>
