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
   - The Ratings dictionary is created and populated with qualitative (instead of quantitative) ratings per order. For example, it matches a 5 star rating with the label 'Excellent.' This dictionary is then mapped to and appended as a new column onto the dataframe.  
   - There is one function created here called get_user_input for the master loop discussed in bullet one above. In addition, the .describe() method is used in cell 5 to get descriptives statistics about the stars and price columnes. In cells 6 and 9 respectively, the .unique() and .value_counts() methods are used to extract from the data the names of unique customers and how many orders each processed. This information is then used as the output in the master input loop once the user inputs a customer name.  
2. Category 2: Utilize External Data:
   - This file used thes the .read_csv() method in the Pandas library to read data from an external CSV file (logbook.csv).This is the basis for the data analysis in the rest of the project. 
3. Category 3: Data Display
   - In cell 10, there is a scatterplot visualization that shows the spread of star ratings per customer (X axis) and per price range (Y axis). The plotted points are both color coordinated and sized differently depending on their star value. The legend can be seen on the top right. Additionally, cell 11 shows a bar graph with error bars to show the average star value per customer. These are two separate views that provide different insights. The bar chart makes seeing the average star value very simple to see. However, some of the customers have a lot of variance. In that case, the scatterplot above helps show the spread of values.
4. “STRETCH” FEATURE LIST:
   - This project uses a Jupyter notebook to display the data analysis.



