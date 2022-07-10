package net.javaguides.springboot.AdminController;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.loginRepository.AdminRepository;
import net.javaguides.springboot.Adminlogin.Admin;
//import net.javaguides.springboot.exception.ResourceNotFoundException;

@CrossOrigin
@RestController
@RequestMapping("/admlog")
public class AdminCtrl {

	@Autowired
	private AdminRepository adminRepository;
	
	
	@GetMapping("/admin/{username}")
	public ResponseEntity<Admin> getEmployeeById(@PathVariable String username) {
		System.out.println(username);
	final Admin adm = adminRepository.findByUsername(username);
//	final Admin pssw=adminRepository.findByPassword(password);
		if(adm == null) {
			throw new UserNotFoundException("Either User_name : "+ username+" or Password Invalid" );  
			
		}else {
			return ResponseEntity.ok(adm);
		}
			
		
	}
	}
	

