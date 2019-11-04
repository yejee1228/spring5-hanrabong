package com.hanrabong.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.utl.Printer;

import lombok.Data;

@Data @Lazy @Component
public class Proxy {
	private int pageNum;
	private String search;
	@Autowired Printer p;
	
	public List<?> crawl(Map<?,?> paramMap){
		List<String> proxyList = new ArrayList<String>();
		String url = "http://"+paramMap.get("site")+".co.kr/";
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url)
					.method(Connection.Method.GET).execute();
			Document document = response.parse();
			String text = document.html();
			//String text = document.text();
			p.accept("proxy "+text);
			proxyList.add(text);
		} catch (Exception e2) {
			e2.printStackTrace();
		}
		return proxyList;
	}

}
