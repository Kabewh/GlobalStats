import pandas as pd

# df = pd.read_csv('popdata.csv', encoding='utf-16')
# df.to_csv('popdata.csv', index=False)
print(df)



# for _, row in df.iterrows():
#     Population.objects.get_or_create(
#         id=row['column1'],
#         country=row['column2'],
#         type=row['column3'],
#         year=row['column4'],
#         total_population=row['column5'],
#         population_density=row['column6'],
#         median_age=row['column7'],
#         natural_change=row['column8'],
#         rate_of_natural_change=row['column9'],
#         population_change=row['column10'],
#         population_growth_rate=row['column11'],
#         births=row['column12'],
#         crude_birth_rate=row['column13'],
#         total_fertility_rate=row['column14'],
#         net_reproductive_rate=row['column15'],
#         mean_age_childbearing=row['column16'],
#         deaths=row['column17'],
#         male_deaths=row['column18'],
#         female_deaths=row['column19'],
#         crude_death_rate=row['column20'],
#         life_expectancy=row['column21'],
#         male_life_expectancy=row['column22'],
#         female_life_expectancy=row['column23'],
#         life_expectancy_at_15=row['column24'],
#         male_life_expectancy_at_15=row['column25'],
#         female_life_expectancy_at_15=row['column26'],
#         life_expectancy_at_65=row['column27'],
#         male_life_expectancy_at_65=row['column28'],
#         female_life_expectancy_at_65=row['column29'],
#         infant_deaths=row['column30'],
#         infant_mortality_rate=row['column31'],
#     )
