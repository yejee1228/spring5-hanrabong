package com.hanrabong.web.brd;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Lazy
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Brd {
    private int brdnum;
    private String title, writer, bpoint, writedate, cnum, content, comseq;
    
}