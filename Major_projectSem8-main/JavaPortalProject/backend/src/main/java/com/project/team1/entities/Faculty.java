package com.project.team1.entities;

import java.time.LocalDate;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Faculty")

public class Faculty {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;

	@Column
	private String facultyName;

	@Column
	private LocalDate dateOfBirth;

	@Column
	private String email;

	@Column
	private String mobileNumber;
	
	@Column
	private String address;
	
	@Column 
	private String city;
	
	@Column 
	private String courseId;
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CreatedAt")
	private Date createdAt;

	@UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "UpdatedAt")
	private Date updatedAt;
	
	@Column
	private boolean status = true;


	public boolean isStatus() {
		return status;
	}



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



	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}



	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getMobileNumber() {
		return mobileNumber;
	}



	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getCourseId() {
		return courseId;
	}



	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}



	public Date getCreatedAt() {
		return createdAt;
	}



	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}



	public Date getUpdatedAt() {
		return updatedAt;
	}



	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}



	public void setStatus(boolean status) {
		this.status = status;
	}



	@Override
	public String toString() {
		return "Faculty [Id=" + Id + ", facultyName=" + facultyName + ", dateOfBirth=" + dateOfBirth + ", email="
				+ email + ", mobileNumber=" + mobileNumber + ", address=" + address + ", city=" + city + ", courseId="
				+ courseId + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + ", status=" + status + "]";
	}


}
