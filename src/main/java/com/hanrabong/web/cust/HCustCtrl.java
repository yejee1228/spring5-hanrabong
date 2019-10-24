package com.hanrabong.web.cust;


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
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.cust.HCust;
import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/hcusts")
//@Log4j
public class HCustCtrl {
	private static final Logger logger = LoggerFactory.getLogger(HCustCtrl.class);
	@Autowired HCust cust;
	@Autowired Printer printer;
	@Autowired HCustMapper mapper;
	//@Autowired HCustServiceImpl hCustService;
	
	@PostMapping("/")
	public String join(@RequestBody HCust param) {
		IConsumer<HCust>c = T->mapper.insertCust(param);
		c.accept(param);
		return "SUCCESS";
	}
	
	@PostMapping("/{cid}")
	public HCust login (@PathVariable String cid, @RequestBody HCust param){
		IFunction<HCust,HCust> f=T-> mapper.selectByIdPw(param);
		return f.apply(param);
	} 
	
}//