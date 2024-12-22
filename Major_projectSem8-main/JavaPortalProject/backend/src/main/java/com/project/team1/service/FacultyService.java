package com.project.team1.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.team1.entities.Faculty;
import com.project.team1.repository.FacultyRepo;
import com.project.team1.repository.FacultyRepo;

@Service

public class FacultyService {
	
	@Autowired
	FacultyRepo Frepo;

	// Find a student by its ID
	public Faculty findById(long id) {
		return Frepo.findById(id).orElse(null);
	}

	// Delete a student by its ID
	public ResponseEntity<String> deleteById(Long id) {
		try {
			Frepo.deleteById(id);
			return ResponseEntity.ok("DELETED SUCCESSFULLY");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during deletion");
		}
	}

	// Save or update a student
	public Faculty saveFaculty(Faculty obj) {
	    if (obj.getId() != 0) {
	        // This is an update operation, so set the updatedAt field
	        obj.setUpdatedAt(new Date());
	        
	        // Fetch the existing student entity from the database to retain the original createdAt value
	        Faculty existingFaculty = Frepo.findById(obj.getId()).orElse(null);
	        if (existingFaculty != null) {
	            obj.setCreatedAt(existingFaculty.getCreatedAt());
	        }
	    } else {
	        // This is a new entity, set the createdAt and updatedAt fields
	        obj.setCreatedAt(new Date());
	        obj.setUpdatedAt(new Date());
	    }

	    return Frepo.save(obj);
	}
	// Check if a student with a given ID exists
	public Boolean existsById(Long id) {
		return Frepo.existsById(id);
	}

	// Retrieve a list of all students
	public List<Faculty> allRecord() {
		return Frepo.findByStatusTrue();
	}
	
	public Faculty findByEmail(String email) {
		return Frepo.findByEmail(email);
	}

}
