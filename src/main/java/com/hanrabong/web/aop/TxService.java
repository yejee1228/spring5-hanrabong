package com.hanrabong.web.aop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class TxService {
	@Autowired TxMapper txMapper;
	@Autowired Proxy pxy;
	
	@SuppressWarnings("unchecked")
	public List<String> crawling(Map<?,?> paramMap){
		List<String> txServicelist = new ArrayList<String>();
		txServicelist.clear();
		txServicelist = (ArrayList<String>)pxy.crawl(paramMap);
		return txServicelist;
	}
	
}
