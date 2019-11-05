package com.hanrabong.web.brd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.brd.Brd;
import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.IConsumer;
import com.hanrabong.web.cmm.IFunction;
import com.hanrabong.web.cmm.IPredicate;
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.pxy.Proxy;
import com.hanrabong.web.pxy.ProxyMap;
import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/brds")
public class BrdCtrl {
	private static final Logger Logger = LoggerFactory.getLogger(BrdCtrl.class);
	@Autowired ProxyMap map;
	@Autowired Printer printer;
	@Autowired Brd brd;
	@Autowired BrdMapper mapper;
	@Autowired List<Brd> list;
	@Autowired Proxy pxy;
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Brd param){
		printer.accept("write 들어옴");
		IConsumer<Brd> c = T->mapper.insertBrd(param);
		c.accept(param);
		ISupplier<String> s = () -> mapper.countBrd();
		map.accept(Arrays.asList("msg","count"), Arrays.asList("SUCCESS",s.get()));
		printer.accept("write 들어옴"+map.toString());
		return map.get();
	}	
	
	@GetMapping("/page/{pageNo}/size/{pageSize}")
	public Map<?,?> list(@PathVariable String pageNo, @PathVariable String pageSize){
		printer.accept("넘어온 페이지넘버: " + pageNo);
		pxy.setPageNum(pxy.parseInt(pageNo));
		pxy.setPageSize(pxy.parseInt(pageSize));
		pxy.paging();
		list.clear();
		ISupplier<List<Brd>> s =()->mapper.selectAll(pxy);
		map.accept(Arrays.asList("list","pages"), Arrays.asList(s.get(),Arrays.asList(1,2,3,4,5)));
		printer.accept("전체 글목록:"+s.get());
		return map.get();
	}
		
	@GetMapping("/count")
	public Map<?,?> count(){
		ISupplier<String> s = () -> mapper.countBrd();
		map.accept(Arrays.asList("count"), Arrays.asList(s.get()));
		return map.get();
	}
	
	@PutMapping("/{brdnum}")
	public Brd update(@PathVariable String brdnum, @RequestBody Brd param){
		printer.accept("update 글목록:");
		IConsumer<Brd> c = T -> mapper.updateBrd(param);
		c.accept(param);
		ISupplier<Brd> s = () -> mapper.selectBrd(param);
		printer.accept("수정한 글목록:"+s.get());
		return s.get();
	}
	
	@DeleteMapping("/{brdnum}")
	public Map<?,?> delete(@PathVariable String brdnum, @RequestBody Brd param){
		printer.accept("컨트롤러");
		IConsumer<Brd> c = T ->mapper.deleteBrd(param);
		c.accept(param);
		map.accept(Arrays.asList("msg"), Arrays.asList("SUCCESS"));
		return map.get();
		
	}
		
		
	
}
