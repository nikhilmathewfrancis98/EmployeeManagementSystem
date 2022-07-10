package net.javaguides.springboot.loginRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.Adminlogin.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	Admin findByUsername(@Param("username") String username);
//	Admin findByPassword(@Param("password") String password);

}
