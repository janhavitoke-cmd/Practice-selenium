'''''
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.google.com")

#
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Start Chrome
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.google.com")

# Wait so you can see it
time.sleep(5)

# Fill the form
driver.find_element(By.NAME, "firstname").send_keys("John")
driver.find_element(By.NAME, "lastname").send_keys("Doe")
driver.find_element(By.ID, "sex-0").click()
driver.find_element(By.ID, "exp-2").click()

# Close the browser
driver.quit()
 

########### fill the form 
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

# Setup browser
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.techlistic.com/p/selenium-practice-form.html")

# Optional: wait for the page to load
time.sleep(2)

# Fill the form
driver.find_element(By.NAME, "firstname").send_keys("John")
driver.find_element(By.NAME, "lastname").send_keys("Doe")
driver.find_element(By.ID, "sex-0").click()
driver.find_element(By.ID, "exp-2").click()

# Optional: keep browser open for a bit
time.sleep(5)

# Close browser
driver.quit()

#

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

# Setup
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("file:///home/atm/Desktop/Practice/Python/login.html")  # Replace with your actual URL
driver.maximize_window()
time.sleep(2)

# Your locator code will go here

# Wait and close
time.sleep(5)
driver.quit()


#fill a form using selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import time # For adding delays if needed

driver = webdriver.Chrome()
driver.get("https://quotes.toscrape.com/login") # Example login form

try:
    username_box = driver.find_element(By.ID, "username")
    password_box = driver.find_element(By.ID, "password")
    login_button = driver.find_element(By.XPATH, "/html/body/div/form/input[2]")

    username_box.send_keys("janhavi")
    password_box.send_keys("123Janhavi")

    login_button.click()

    # Add assertions or further actions after submission if needed
    time.sleep(5) # Wait for page to load after submission

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    driver.quit()
    '''

#fill a form 
#url- https://www.techlistic.com/p/selenium-practice-form.html



from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

# 1. Setup Chrome WebDriver
driver = webdriver.Chrome

# 2. Open form page
driver.get("https://www.techlistic.com/p/selenium-practice-form.html")
driver.maximize_window()

# 3. Fill out text fields
driver.find_element(By.NAME, "firstname").send_keys("Roy")
driver.find_element(By.NAME, "lastname").send_keys("Banner")

# 4. Select a radio button
driver.find_element(By.ID, "gen-0").click()   # Male
driver.find_element(By.ID, "ex-3").click()   # 3 years experience

# 5. Fill date field
driver.find_element(By.ID, "datepicker").send_keys("08/08/2025")

# 6. Select a checkbox
driver.find_element(By.ID, "prof-1").click()  # Automation Tester

# 7. Select from dropdown
from selenium.webdriver.support.ui import Select
continent_dropdown = Select(driver.find_element(By.ID, "continents"))
continent_dropdown.select_by_visible_text("Europe")

# 8. Submit the form
driver.find_element(By.ID, "submit").click()

# Wait a bit and close
time.sleep(5)
driver.quit()
