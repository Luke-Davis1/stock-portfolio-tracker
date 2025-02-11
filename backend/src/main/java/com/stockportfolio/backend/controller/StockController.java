package com.stockportfolio.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class StockController {

    @GetMapping("/stocks")
    public ResponseEntity<String> getStocks() {
        return ResponseEntity.ok("{\"message\": \"hello world\"}");
    }
}

