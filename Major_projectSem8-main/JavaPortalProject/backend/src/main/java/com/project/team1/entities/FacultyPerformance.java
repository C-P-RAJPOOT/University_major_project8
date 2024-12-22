package com.project.team1.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "faculty_performance")

public class FacultyPerformance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private long Id;

	private String facultyName;

	private String facultyDetail;

	private String facultyId;

	private String performance;

	private String performanceDetail;

	private String performanceId;

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getFacultyName() {
		return facultyName;
	}

	public void setFacultyName(String facultyName) {
		this.facultyName = facultyName;
	}

	public String getFacultyDetail() {
		return facultyDetail;
	}

	public void setFacultyDetail(String facultyDetail) {
		this.facultyDetail = facultyDetail;
	}

	public String getFacultyId() {
		return facultyId;
	}

	public void setFacultyId(String facultyId) {
		this.facultyId = facultyId;
	}

	public String getPerformance() {
		return performance;
	}

	public void setPerformance(String performance) {
		this.performance = performance;
	}

	public String getPerformanceDetail() {
		return performanceDetail;
	}

	public void setPerformanceDetail(String performanceDetail) {
		this.performanceDetail = performanceDetail;
	}

	public String getPerformanceId() {
		return performanceId;
	}

	public void setPerformanceId(String performanceId) {
		this.performanceId = performanceId;
	}

	@Override
        public String toString() {
            return "FacultyPerformance [Id=" + Id + ", facultyName=" + facultyName + ", facultyDetail=" + facultyDetail
                    + ", facultyId=" + facultyId + ", performance=" + performance + ", performanceDetail=" + performanceDetail	+ ", performanceId=" + performanceId + "]";
	}
}
