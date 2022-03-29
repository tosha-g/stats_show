# Order analysis

This project explores a mock commercial dataset and attempts to answer the following questions:
1. How many orders did each company fulfill?
2. What was the distribution of rating feedback by company and taking into account price range of the item?

This project also involved an interactive experience in which the user can decide which company's order information they want to learn more about.

## About the data set
This is a mock data set in CSV format. All company names are fictional and if there are actual companies with these names, that is purely coincidental. The stars ratings were made using the RANDBETWEEN(0,5) function in Excel. 

This data is meant to show a dashboard of purchase orders from various companies. It includes information about the serial number of the order, the price, the date the order was placed, and the date it was delivered.

To be able to run this project, please import the following modules:
```
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
plt.style.use('ggplot')
```

## Project features
1. Category 1: Python Programming Basics:
   - There is a “master loop” console application where the user can input which customer they would like to learn more about. If they input a valid customer, the program runs and finishes. If they enter an invalid input, they have a maximum of 5 attempts to re-enter a valid name before the programs exits.
   - The Ratings dictionary is created and populated with qualitative (instead of quantitative) ratings per order. This dictionary is then appended as a new column onto the dataframe.  it with several values, retrieve at least one value, and use it in your program.
Create and call at least 3 functions or methods, at least one of which must return a value that is used somewhere else in your code
