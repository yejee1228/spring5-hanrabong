package com.hanrabong.web.aop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/tx")
@Transactional
public class TxCtrl {
	@Autowired Proxy pxy;
	@Autowired TxService service;
	@Autowired Printer printer;
	
	@GetMapping("/crawling/{site}/{srch}")
	public List<String> bringUrl(@PathVariable String site, @PathVariable String srch){
		HashMap<String,String> map = new HashMap<>();
		printer.accept(site+"/"+srch);
		map.clear();
		map.put("site",site);
		map.put("srch",srch);
		return service.crawling(map);
	}
}
