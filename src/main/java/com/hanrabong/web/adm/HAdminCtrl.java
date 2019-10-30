package com.hanrabong.web.adm;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.cmm.IConsumer;
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/admins")
public class HAdminCtrl {

	@Autowired HAdmin adm;
	@Autowired HAdminMapper mapper;
	@Autowired Map<String,Object> map;
	@Autowired Printer print;
	
	@PostMapping("/")
	public Map<?,?> register(@RequestBody HAdmin param) {
		IConsumer<HAdmin> c = T-> mapper.insertAdmin(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PostMapping("/{aid}")
	public Map<?,?> access(@PathVariable String aid, @RequestBody HAdmin param) {
		ISupplier<HAdmin> s = ()->mapper.selectAdmin(param);
		print.accept(s.get().getAid());
		String msg = (s.get().getAid()==null)?"FAIL":"SUCCESS";
		map.clear();
		map.put("msg", msg);
		return map;
	}
	
	@GetMapping
	public HAdmin mypage(@PathVariable String aid) {
		return null;
	}
	
	@PutMapping
	public void update(@PathVariable String aid, @RequestBody HAdmin param) {
		
	}
	
	@DeleteMapping
	public void delete(@PathVariable String aid, @RequestBody HAdmin param) {
		
	}
}
