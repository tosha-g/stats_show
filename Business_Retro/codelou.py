import pandas as pd


logbook = pd.read_csv(r'C:\Users\User\Desktop\coding_projects\Business_Retro\logbook.csv')
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



customer_names = logbook_df['Customer Name'].unique()
print(f'This is the list of customers: {customer_names}\n')
customer = input('Which customer are you interested in today?')
get_orders()
#








