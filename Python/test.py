import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service= Service(ChromeDriverManager().install()))
driver.get("https://www.facebook.com/")
driver.maximize_window()

time.sleep(2)

driver.find_element(By.ID,"email").send_keys("janhavi")
driver.find_element(By.ID,"pass").send_keys("122121")

driver.find_element(By.NAME,"Login").click()

"""
hyfrtdrtd
"""
time.sleep(6)
driver.quit()