import pandas as pd
import datetime

logbook = pd.read_csv(r'C:\Users\User\Desktop\coding_projects\Business_Retro\logbook.csv')
#logbookinfo = []
#logbookinfo = logbook
#print(logbookinfo)
logbook_df=pd.DataFrame(logbook)
#print(logbook_df)
#print(logbook_df)

def get_orders():
    ordernum = logbook_df['Customer Name'].value_counts()
    while customer not in customer_names:
        print("That's not a valid customer name. Try again.")
        tryagain = input('Which customer are you interested in today?')
        #print(f'{tryagain} had a total of {ordernum[tryagain]} orders.')
    else:
        print(f'{customer} had a total of {ordernum[customer]} orders.')

#logs_dicts = logbook_df.to_dict()
#orders = []
#for order in logs_dicts:
#    orders.append(
#        order(customer=order['Customer Name'],
#            serialno=order['Serial #'],
#            stars=order['Stars'],
#            price=order['Price'],
#            ordered=order['Order'],
#            delivered=order['Delivered'],
#            )
#    )
#print(orders)


#customer_names = logbook_df['Customer Name'].unique()
#print(f'This is the list of customers: {customer_names}\n')
#customer = input('Which customer are you interested in today?')
#get_orders()
#



#Create a dictionary of star values in words instead of numbers
#Add a new column with word ratings
Ratings = {
    1:'Terrible',
    2:'Poor',
    3:'Average',
    4:'Good',
    5:'Excellent'
}

logbook_df['Rating']=logbook_df['Stars'].map(Ratings)
print(logbook_df.head())










