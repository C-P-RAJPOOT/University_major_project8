package com.project.team1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.team1.entities.Faculty;
import com.project.team1.entities.Student;

@Repository
public interface FacultyRepo extends JpaRepository<Faculty,Long> {
	Faculty findByEmail(String email);
	 List<Faculty> findByStatusTrue();
	
}
