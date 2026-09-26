package com.aaiins.service;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = "jwt.secret=test-only-secret-key-that-is-at-least-32-bytes-long")
class AaiinsServiceApplicationTests {

	@Test
	void contextLoads() {
	}

}
