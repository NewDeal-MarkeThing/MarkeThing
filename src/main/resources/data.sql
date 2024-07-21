-- 목 데이터 1
INSERT INTO `SITE_USER` (`EMAIL`, `PASSWORD`, `NAME`, `NICKNAME`, `PHONE_NUMBER`, `ADDRESS`, `MY_LOCATION`, `MANNER_SCORE`, `PROFILE_IMG`, `STATUS`, `POINT`, `AUTH_TYPE`, `CREATED_AT`, `UPDATED_AT`)
VALUES ('user1@example.com', 'password123', 'John Doe', 'johnny', '123-456-7890', '123 Main St', ST_GeomFromText('POINT(30.0 10.0)'), '4.5,4.7,4.6', 'https://example.com/profile1.jpg', TRUE, 100, 'GENERAL', '2023-01-01 00:00:00', '2023-01-01 00:00:00');

-- 목 데이터 2
INSERT INTO `SITE_USER` (`EMAIL`, `PASSWORD`, `NAME`, `NICKNAME`, `PHONE_NUMBER`, `ADDRESS`, `MY_LOCATION`, `MANNER_SCORE`, `PROFILE_IMG`, `STATUS`, `POINT`, `AUTH_TYPE`, `CREATED_AT`, `UPDATED_AT`)
VALUES ('user2@example.com', 'password456', 'Jane Smith', 'janeS', '987-654-3210', '456 Elm St', ST_GeomFromText('POINT(20.0 20.0)'), '4.8,4.9,4.7', 'https://example.com/profile2.jpg', TRUE, 200, 'KAKAO', '2023-02-01 00:00:00', '2023-02-01 00:00:00');

-- 목 데이터 3
INSERT INTO `SITE_USER` (`EMAIL`, `PASSWORD`, `NAME`, `NICKNAME`, `PHONE_NUMBER`, `ADDRESS`, `MY_LOCATION`, `MANNER_SCORE`, `PROFILE_IMG`, `STATUS`, `POINT`, `AUTH_TYPE`, `CREATED_AT`, `UPDATED_AT`)
VALUES ('user3@example.com', 'password789', 'Alice Johnson', 'aliceJ', '555-123-4567', '789 Oak St', ST_GeomFromText('POINT(40.0 30.0)'), '4.6,4.8,4.7', 'https://example.com/profile3.jpg', TRUE, 300, 'GOOGLE', '2023-03-01 00:00:00', '2023-03-01 00:00:00');

-- 목 데이터 1 (서울)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (1, 'SEOUL', '남대문 시장 탐방', '남대문 시장은 서울의 대표적인 전통 시장으로 다양한 먹거리와 쇼핑을 즐길 수 있는 곳입니다. 특히 야시장이 유명합니다.', 'https://example.com/img1.jpg', '2023-01-01 10:00:00', '2023-01-01 10:00:00');

-- 목 데이터 2 (경기)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (2, 'GYEONGGI', '수원 남문 시장의 매력', '수원 남문 시장은 경기도 수원에 위치한 전통 시장으로 다양한 먹거리와 문화 행사를 즐길 수 있는 곳입니다.', 'https://example.com/img2.jpg', '2023-01-02 11:00:00', '2023-01-02 11:00:00');

-- 목 데이터 3 (부산)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (3, 'BUSAN', '부산 자갈치 시장 소개', '부산 자갈치 시장은 해산물이 유명한 전통 시장으로 신선한 해산물을 저렴한 가격에 구매할 수 있습니다.', NULL, '2023-01-03 12:00:00', '2023-01-03 12:00:00');

-- 목 데이터 4 (대구)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (1, 'DAEGU', '대구 서문 시장의 역사', '대구 서문 시장은 대구의 대표적인 전통 시장으로 오랜 역사와 함께 다양한 상품을 만날 수 있는 곳입니다.', 'https://example.com/img4.jpg', '2023-01-04 13:00:00', '2023-01-04 13:00:00');

-- 목 데이터 5 (서울)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (2, 'SEOUL', '광장 시장 먹거리', '광장 시장은 서울 종로에 위치한 전통 시장으로 다양한 전통 먹거리를 맛볼 수 있습니다.', 'https://example.com/img5.jpg', '2023-01-05 14:00:00', '2023-01-05 14:00:00');

-- 목 데이터 6 (경기)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (3, 'GYEONGGI', '안양 중앙 시장 방문기', '안양 중앙 시장은 경기도 안양에 위치한 전통 시장으로 다양한 상품과 먹거리를 제공하고 있습니다.', 'https://example.com/img6.jpg', '2023-01-06 15:00:00', '2023-01-06 15:00:00');

-- 목 데이터 7 (부산)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (1, 'BUSAN', '부산 국제 시장의 모든 것', '부산 국제 시장은 다양한 상품과 먹거리로 유명한 전통 시장으로 많은 관광객들이 방문하는 곳입니다.', NULL, '2023-01-07 16:00:00', '2023-01-07 16:00:00');

-- 목 데이터 8 (대구)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (2, 'DAEGU', '대구 칠성 시장의 숨은 맛집', '대구 칠성 시장은 다양한 맛집이 숨겨져 있는 전통 시장으로 많은 사람들이 찾는 곳입니다.', 'https://example.com/img8.jpg', '2023-01-08 17:00:00', '2023-01-08 17:00:00');

-- 목 데이터 9 (서울)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (3, 'SEOUL', '서울 풍물 시장에서의 하루', '서울 풍물 시장은 다양한 전통 물품과 먹거리를 제공하는 전통 시장으로 많은 볼거리가 있습니다.', 'https://example.com/img9.jpg', '2023-01-09 18:00:00', '2023-01-09 18:00:00');

-- 목 데이터 10 (경기)
INSERT INTO `COMMUNITY` (`USER_ID`, `AREA`, `TITLE`, `CONTENT`, `POST_IMG`, `CREATED_AT`, `UPDATED_AT`)
VALUES (1, 'GYEONGGI', '의정부 제일 시장 탐방기', '의정부 제일 시장은 경기도 의정부에 위치한 전통 시장으로 다양한 먹거리와 쇼핑을 즐길 수 있는 곳입니다.', 'https://example.com/img10.jpg', '2023-01-10 19:00:00', '2023-01-10 19:00:00');

-- 목 데이터 1
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M001', '남대문 시장', 1, '서울특별시 중구 남대문시장', '남대문시장', 37.560174, 126.977974);

-- 목 데이터 2
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M002', '광장 시장', 1, '서울특별시 종로구 광장시장', '광장시장', 37.571229, 126.990975);

-- 목 데이터 3
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M003', '부산 자갈치 시장', 1, '부산광역시 중구 자갈치로', '자갈치 시장', 35.097706, 129.032838);

-- 목 데이터 4
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M004', '수원 남문 시장', 1, '경기도 수원시 팔달구 남문로', '남문 시장', 37.285107, 127.013332);

-- 목 데이터 5
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M005', '대구 서문 시장', 1, '대구광역시 중구 서문로', '서문 시장', 35.866442, 128.599178);

-- 목 데이터 6
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M006', '대전 중앙 시장', 1, '대전광역시 중구 중앙로', '중앙 시장', 36.328493, 127.425218);

-- 목 데이터 7
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M007', '의정부 제일 시장', 1, '경기도 의정부시 의정부로', '제일 시장', 37.738342, 127.057270);

-- 목 데이터 8
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M008', '안양 중앙 시장', 1, '경기도 안양시 만안구 중앙로', '중앙 시장', 37.397748, 126.927513);

-- 목 데이터 9
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M009', '부산 국제 시장', 1, '부산광역시 중구 국제시장로', '국제 시장', 35.101207, 129.031515);

-- 목 데이터 10
INSERT INTO `MARKET` (`ID_NUM`, `MARKET_NAME`, `MARKET_TYPE`, `ROAD_ADDRESS`, `STREET_ADDRESS`, `LAT`, `LON`)
VALUES ('M010', '서울 풍물 시장', 1, '서울특별시 종로구 풍물시장', '풍물 시장', 37.573425, 126.981203);

-- 의뢰글 데이터 1
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (1, 1, '남대문 시장에서 장보기', '남대문 시장에서 다양한 식료품을 구매할 의뢰입니다. 신선한 채소와 과일을 찾아주세요.', 'https://example.com/img1.jpg', 50000, 'RECRUITING', '14:00:00', '2023-07-01', '서울특별시 중구 남대문시장', 37.560174, 126.977974, '2023-06-01 09:00:00', NULL);

-- 의뢰글 데이터 2
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (2, 2, '광장 시장에서 전통 간식 구매', '광장 시장에서 전통 간식과 소스류를 구입해 주세요. 특히 떡과 전통 과자에 신경 써주세요.', NULL, 30000, 'IN_PROGRESS', '10:00:00', '2023-07-02', '서울특별시 종로구 광장시장', 37.571229, 126.990975, '2023-06-02 10:00:00', NULL);

-- 의뢰글 데이터 3
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (3, 3, '부산 자갈치 시장 해산물 구매', '부산 자갈치 시장에서 신선한 해산물을 구매해주세요. 특히 대게와 오징어를 원합니다.', 'https://example.com/img3.jpg', 100000, 'RECRUITING', '16:00:00', '2023-07-03', '부산광역시 중구 자갈치로', 35.097706, 129.032838, '2023-06-03 11:00:00', NULL);

-- 의뢰글 데이터 4
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (1, 4, '대구 서문 시장에서 전통 음식 구매', '대구 서문 시장에서 전통 음식과 재료를 구매해 주세요. 특히 대구탕 재료에 신경 써주세요.', NULL, 70000, 'COMPLETED', '12:00:00', '2023-07-04', '대구광역시 중구 서문로', 35.866442, 128.599178, '2023-06-04 12:00:00', '2023-06-05 14:00:00');

-- 의뢰글 데이터 5
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (2, 5, '대전 중앙 시장의 식료품 구매', '대전 중앙 시장에서 다양한 식료품과 양념을 구매해 주세요. 특히 고기와 야채에 신경 써주세요.', 'https://example.com/img5.jpg', 60000, 'RECRUITING', '09:00:00', '2023-07-05', '대전광역시 중구 중앙로', 36.328493, 127.425218, '2023-06-05 09:00:00', NULL);

-- 의뢰글 데이터 6
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (3, 6, '의정부 제일 시장에서 식자재 구매', '의정부 제일 시장에서 다양한 식자재와 간식류를 구매해 주세요. 특히 과일과 반찬거리에 주의해주세요.', NULL, 40000, 'IN_PROGRESS', '11:00:00', '2023-07-06', '경기도 의정부시 의정부로', 37.738342, 127.057270, '2023-06-06 11:00:00', NULL);

-- 의뢰글 데이터 7
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (1, 7, '안양 중앙 시장에서 소스류 구매', '안양 중앙 시장에서 다양한 소스류와 양념을 구매해 주세요. 특히 간장과 고추장에 신경 써주세요.', 'https://example.com/img7.jpg', 35000, 'RECRUITING', '15:00:00', '2023-07-07', '경기도 안양시 만안구 중앙로', 37.397748, 126.927513, '2023-06-07 13:00:00', NULL);

-- 의뢰글 데이터 8
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (2, 8, '부산 국제 시장에서 식료품 구매', '부산 국제 시장에서 신선한 식료품과 간식류를 구매해 주세요. 특히 해산물에 주의해주세요.', NULL, 80000, 'IN_PROGRESS', '13:00:00', '2023-07-08', '부산광역시 중구 국제시장로', 35.101207, 129.031515, '2023-06-08 14:00:00', NULL);

-- 의뢰글 데이터 9
INSERT INTO `MARKET_PURCHASE_REQUEST`
(`USER_ID`, `MARKET_ID`, `TITLE`, `CONTENT`, `POST_IMG`, `FEE`, `STATUS`, `MEETUP_TIME`, `MEETUP_DATE`, `MEETUP_ADDRESS`, `MEETUP_LAT`, `MEETUP_LON`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (3, 9, '서울 풍물 시장의 전통 물품 구매', '서울 풍물 시장에서 전통 물품과 소품을 구매해 주세요. 특히 전통 공예품에 신경 써주세요.', 'https://example.com/img9.jpg', 45000, 'RECRUITING', '17:00:00', '2023-07-09', '서울특별시 종로구 풍물시장', 37.573425, 126.981203, '2023-06-09 15:00:00', NULL);


-- 댓글 데이터 1
INSERT INTO `COMMENT`
(`USER_ID`, `POST_ID`, `CONTENT`, `STATUS`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (1, 1, '이 글 정말 유익하네요! 전통 시장의 정보가 아주 도움이 됩니다.', 'POST', '2023-07-01 10:15:00', NULL);

-- 댓글 데이터 2
INSERT INTO `COMMENT`
(`USER_ID`, `POST_ID`, `CONTENT`, `STATUS`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (2, 2, '광장 시장에서의 전통 간식은 정말 맛있죠! 좋은 정보 감사합니다.', 'POST', '2023-07-02 14:45:00', NULL);

-- 댓글 데이터 3
INSERT INTO `COMMENT`
(`USER_ID`, `POST_ID`, `CONTENT`, `STATUS`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (3, 3, '부산 자갈치 시장의 해산물은 신선하고 질이 좋아요. 추천합니다!', 'POST', '2023-07-03 09:30:00', NULL);

-- 대댓글 데이터 1
INSERT INTO `REPLY_COMMENT`
(`USER_ID`, `COMMENT_ID`, `CONTENT`, `STATUS`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (1, 1, '정말 그렇습니다! 전통 시장의 다양한 음식들을 소개해주셔서 감사합니다.', 'POST', '2023-07-04 11:20:00', NULL);

-- 대댓글 데이터 2
INSERT INTO `REPLY_COMMENT`
(`USER_ID`, `COMMENT_ID`, `CONTENT`, `STATUS`, `CREATED_AT`, `UPDATED_AT`)
VALUES
    (2, 2, '맞아요! 광장 시장에서의 전통 간식들이 특히 맛있어요. 다음에 꼭 가봐야겠어요.', 'POST', '2023-07-05 16:05:00', NULL);
