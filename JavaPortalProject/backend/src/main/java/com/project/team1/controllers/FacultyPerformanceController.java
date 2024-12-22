package com.project.team1.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team1.entities.FacultyPerformance;
import com.project.team1.service.FacultyPerformanceService;

@RestController
@RequestMapping("/FacultyPerformance")

public class FacultyPerformanceController {
	
	@Autowired
	private FacultyPerformanceService Fservice;
	
	@GetMapping("/getAllFacultyPerformance")
	public List<FacultyPerformance> getAllFacultyPerformance() {
		return Fservice.getAllFacultyPerformance();
	}

}
