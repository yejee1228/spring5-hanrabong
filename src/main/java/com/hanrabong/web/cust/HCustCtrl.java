package com.hanrabong.web.cust;


import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.cmm.IConsumer;
import com.hanrabong.web.cmm.IFunction;
import com.hanrabong.web.cmm.IPredicate;
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.cust.HCust;
import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/hcusts")

public class HCustCtrl {
	private static final Logger logger = LoggerFactory.getLogger(HCustCtrl.class);
	@Autowired HCust cust;
	@Autowired Printer printer;
	@Autowired HCustMapper mapper;
	@Autowired Map<String,Object> map;
	
	@GetMapping("/{cid}/exist")
	public Map<?,?> existId(@PathVariable String cid){
		printer.accept("exist 들어옴");
		IFunction<String,Integer> p = T -> mapper.existId(cid);
		map.clear();
		map.put("msg", ((p.apply(cid)==0)?"SUCCESS":"FAIL"));
		printer.accept(map.get("msg"));
		return map;
	}
	
	@PostMapping("/")
	public Map<?,?> join(@RequestBody HCust param) {
		printer.accept("join 들어옴");
		IConsumer<HCust> c = T->mapper.insertCust(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PostMapping("/{cid}")
	public HCust login (@PathVariable String cid, @RequestBody HCust param){
		IFunction<HCust,HCust> f=T-> mapper.selectByIdPw(param);
		return f.apply(param);
	} 
	
}//