from distutils.core import setup

setup(
    name='atlas',
    version='0.1',
    description='Autonated Travel Planner',
    author='Jeffrey Zhang',
    author_email='jeffrey.zh4ng@gmail.com',
    url='https://github.com/JeffreyZh4ng/atlas';
    packages=find_packages(),
    install_requires=[
	Django==2.1.4
	djangorestframework==3.9.0
	pytz==2018.7
    ]
)
