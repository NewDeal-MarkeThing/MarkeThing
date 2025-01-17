package com.example.demo.csv.service;


import com.example.demo.marketpurchaserequest.entity.Market;
import com.example.demo.marketpurchaserequest.repository.MarketRepository;
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.geom.GeometryFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CsvService {

    private final MarketRepository marketRepository;
    @Transactional
    public void saveMarkets() {
        try {
            Path fileName = Path.of("src/main/resources/template/market.csv");
            BufferedReader br = Files.newBufferedReader(fileName, Charset.forName("EUC-KR"));
            String line = "";

            while((line = br.readLine()) != null) {
                List<String> stringList = new ArrayList<>();
                String stringArray[] = line.split(",");
                stringList = Arrays.asList(stringArray);

                if(stringList.get(0).equals("식별번호")) {
                    continue; // 첫줄은 제외를 해야 함.
                }
                if(stringList.size() != 7) {
                    continue;
                }
                int type = 0; // 상설장:0 5일장:1
                if(stringList.get(2).equals("5일장")) {
                    type = 1;
                }
                GeometryFactory gf = new GeometryFactory(); // 포인트 객체를 처리하기 위한 클래스
                double lat = Double.parseDouble(stringList.get(5));
                double lon = Double.parseDouble(stringList.get(6));
                Market temp = Market.builder()
                        .idNum(stringList.get(0))
                        .type(type)
                        .marketName(stringList.get(1))
                        .roadAddress(stringList.get(3))
                        .streetAddress(stringList.get(4))
                        .lat(lat)
                        .lon(lon)
                        .build();
                // Market 데이터 생성
                marketRepository.save(temp);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
