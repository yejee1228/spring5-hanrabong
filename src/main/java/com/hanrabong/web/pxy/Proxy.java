package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.utl.Printer;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, startRow, endRow, nextBlock, prevBlock, startPage, endPage;
	private boolean existPrev,existNext;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired Printer p;
	@Autowired BrdMapper mapper;
	
	public void paging() {
		ISupplier<String> s =()->mapper.countBrd();
		int totalCount = Integer.parseInt(s.get());
		int pageCount = totalCount/pageSize+((totalCount%pageSize==0)?0:1);
		startRow = (pageNum-1)*pageSize;
		endRow = (pageNum==pageCount)?(pageSize*pageNum)-1:totalCount-1;
		int blockCount = pageCount/BLOCK_SIZE+((pageCount%BLOCK_SIZE==0)?0:1);
		int blockNum = (pageNum-1)/BLOCK_SIZE;
		startPage = blockNum * BLOCK_SIZE + 1;
		endPage = ((blockNum + 1) != blockCount) ? startPage + (BLOCK_SIZE -1) : pageCount;
		existPrev = blockNum!=0;
		existNext = (blockNum + 1) != blockCount;
		nextBlock = startPage + BLOCK_SIZE;
		prevBlock = startPage - BLOCK_SIZE;
		
	}
	public int integer(String param) {
		Function<String, Integer> f = s ->Integer.parseInt(s);
		return f.apply(param);
	}
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
