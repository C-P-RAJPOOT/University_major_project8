package com.project.team1.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team1.entities.Faculty;
import com.project.team1.entities.Faculty;
import com.project.team1.service.FacultyService;
import com.project.team1.service.FacultyService;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/faculty")

public class FacultyController {
	@Autowired
	private FacultyService Fservice;

	// Get a list of all Faculty
	@GetMapping("/allfaculties")
	public List<Faculty> allRecord() {
		return Fservice.allRecord();
	}

	// Save a new Faculty
	@PostMapping("/savefaculty")
	public Faculty saveFaculty(@RequestBody Faculty obj) {
		return Fservice.saveFaculty(obj);
	}

	// Delete a faculty by its ID
//	@DeleteMapping("/{id}/deletefaculty")
//	public void deleteFaculty(@PathVariable Long id) {
//		Fservice.deleteById(id);
//	}
	
	@DeleteMapping("/deletefaculty/{id}")
	public ResponseEntity<String> deletefaculty(@PathVariable Long id) {
		Faculty faculty = Fservice.findById(id);
		if (faculty == null) {
			return ResponseEntity.notFound().build();
		}

		// Update the 'status' to false
		faculty.setStatus(false);
		Fservice.saveFaculty(faculty);

		return ResponseEntity.ok("Faculty status is marked as Inactive");
	}
	
	//find a faculty by its id
	@GetMapping("/seefaculty/{id}")
	public ResponseEntity<?> getFaculty(@PathVariable Long id) {
	    Faculty faculty = Fservice.findById(id);

	    if (faculty != null) {
	        return ResponseEntity.ok(faculty);
	    } else {
	        return ResponseEntity
		            .status(HttpStatus.NOT_FOUND)
		            .body("Faculty with ID " + id + " does not exist.");
		    }
	}
	
	// Get the particular record by its email
	@GetMapping("/viewfaculty/{email}")
	public ResponseEntity<?> getCourseByCourseId(@PathVariable String email) {
	    Faculty faculty = Fservice.findByEmail(email);

	    if (faculty != null) {
	        return ResponseEntity.ok(faculty);
	    } else {
	        return ResponseEntity
		            .status(HttpStatus.NOT_FOUND)
		            .body(null);
		    }
	}
	

	// Update a Faculty by its ID
	@PutMapping("/update/{id}")
	public Faculty updateFaculty(@PathVariable Long id, @RequestBody Faculty obj) {
		Boolean check = Fservice.existsById(id);

		if (check) {
			obj.setId(id);
			return Fservice.saveFaculty(obj);
		} else {
			return Fservice.saveFaculty(obj);
		}
	}

	// Partially update a Faculty by its ID
	@PatchMapping("/{id}")
	public Faculty patchUpdate(@PathVariable Long id, @RequestBody Faculty obj) throws Exception {
		Faculty fri = Fservice.findById(id);

		if (fri == null) {
			throw new Exception("Record Not found");
		}

		fri.setFacultyName(obj.getFacultyName());
		return Fservice.saveFaculty(fri);
	}
}
