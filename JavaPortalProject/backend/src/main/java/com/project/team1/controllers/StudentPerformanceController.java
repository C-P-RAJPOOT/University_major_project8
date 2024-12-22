package com.project.team1.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.team1.entities.StudentPerformance;
import com.project.team1.service.StudentPerformanceService;

@RestController
@RequestMapping("/StudentPerformance")
public class StudentPerformanceController {
	@Autowired
	private StudentPerformanceService Sservice;
	
	@GetMapping("/getStudentPerformanceEWTM")
	public List<StudentPerformance> getStudentPerformanceEWTM() {
		return Sservice.getStudentPerformanceEWTM();
	}
	
	@GetMapping("/getStudentPerformanceEWSM")
	public List<StudentPerformance> getStudentPerformanceEWSM() {
		return Sservice.getStudentPerformanceEWSM();
	}
	
	@GetMapping("/getStudentPerformanceSW")
	public List<StudentPerformance> getStudentPerformanceSW() {
		return Sservice.getStudentPerformanceSW();
	}
	
	@GetMapping("/getStudentPerformanceExamType")
	public List<StudentPerformance> getStudentPerformanceExamType() {
		return Sservice.getStudentPerformanceExamType();
	}

}

