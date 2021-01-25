<script>

let CustomerDetails=
    {
    Lastname : "kumar",
Firstname :"Pavan",
Middlename :"Bijjavaram",
//Driver's license number:ka50201500006939
//Driver's license state:karnataka
//Drivers license country:india
//Civilian type: around india
//Employee type:software engineer
//Date of birth:12-07-1992
//City of birth:rajampet
       info(Driverlicensenumber,Driverlicensestate,Driverslicensecountry)
       {
          this.Driverlicensenumber=Driverlicensenumber
          this.Driverlicensestate=Driverlicensestate
          this.Driverslicensecountry=Driverslicensecountry
 
          if(this.Driverlicensenumber== "ka50201500006939")
          {
            document.writeln("<br> Relevant Data:")
            this.details("<br>around india", " software engineer ","12-07-1992"," rajampet<br>")
          }
          else
          {
            document.writeln(" Try again . Irrevalant Data !!")
          }
       },
      details(Civiliantype,Employeetype,Dateofbirth,Cityofbirth)
      {

         this.Civiliantype=Civiliantype
         this.Employeetype=Employeetype
         this.Dateofbirth=Dateofbirth
         this.Cityofbirth=Cityofbirth
         if(Dateofbirth=="12-07-1992")
         {
    
          this.display()
        }
        else
        {
          document.writeln("Error try again!!")
        }
        },
      display()
      {
       
        document.writeln(this.Driverlicensenumber)
       document.writeln(this.Driverlicensestate)
       document.writeln(this.Driverslicensecountry)
       document.writeln(this.Civiliantype)
       document.writeln(this.Employeetype)
       document.writeln(this.Dateofbirth)
       document.writeln(" Be Yourself")
       }
      }
 CustomerDetails.info("ka50201500006939", "karnataka","india<br>")
 document.write("<br>")
 
 let AppearanceInformation=
    {
    Lastname : "kumar",
Firstname :"Pavan",
Middlename :"Bijjavaram",

       info(Weight,Height,Homephone)
       {
          this.Weight=Weight
          this.Height=Height
          this.Homephone=Homephone
          
          if(this.Homephone== 975545445)
          {
            document.writeln("<br> Physic Appearance Data:")
            this.details("<br>brown", "male","#6/96,rajampet,kadapa.",8553577745, "andhrapradesh","india<br>")
          }
          else
          {
            document.writeln("Irreavalant Data. Try Again!!")
          }
       },
      details(Eyecolour,Gender,Homeaddress,Mobile,State,County)
      {

         this.Eyecolour=Eyecolour
         this.Gender=Gender
         this.Homeaddress=Homeaddress
         this.Mobile=Mobile
         this.State=State
         this.County=County
         if(Mobile==8553577745)
         {
         
          this.display()
        }
        else
        {
          document.writeln("Error try again!!")
        }
        },
      display()
      {
       
        document.writeln(this.Weight)
       document.writeln(this.Height)
       document.writeln(this.Eyecolour)
       document.writeln(this.Homephone)
       document.writeln(this.Gender)
       document.writeln(this.Homeaddress)
       document.writeln(this.State)
       document.writeln(this.Country)
       
       document.writeln(" Be Yourself")
       }
      }
 AppearanceInformation.info(55,5.8,975545445,"<br>")
 document.write("<br>")
 
 let VehicleInformation=
    { 
    Lastname : "kumar",
    Firstname :"Pavan",
    Middlename :"Bijjavaram",

       info(Vehicletype,Colour,Enginenumber)
       {
          this.Vehicletype=Vehicletype
          this.Colour=Colour
          this.Enginenumber=Enginenumber
          
          if(this.Enginenumber== "kp98gtyihh457797")
          {
            document.writeln("<br> Vehicles Details:")
            this.details("<br>tc5678898335r45","BMW<br>")
          }
          else
          {
            document.writeln("Irreavalant Data. Try Again!!")
          }
       },
      details(Chassisnumber,Company)
      {

         this.Chassisnumber=Chassisnumber
         this.Company=Company
         if(Chassisnumber=="tc5678898335r45")
         {
         
          this.display()
        }
        else
        {
          document.writeln("Error try again!!")
        }
        },
      display()
      {
       
        document.writeln(this.Vehicletype)
       document.writeln(this.Colour)
       document.writeln(this.Enginenumber)
       document.writeln(this.Chassisnumber)
       document.writeln(this.Company)
       
       document.writeln(" Be Yourself")
       }
      }
VehicleInformation.info("light motor vehicle- car55", "red","kp98gtyihh457797","<br>")
 document.write("<br>")
  
  let SystemProperties =
    {
    Lastname : "kumar",
Firstname :"Pavan",
Middlename :"Bijjavaram",
//Rating			:	4.5
//Processor		:	Intel® Core™ i5-2450 CPU
//InstalledMemory(RAM):	4.00GB
//SystemType		:	64-bit Operating System
//PenandTouch		: 	No Pen or Touch Input is available for this Display 
//ComputerName	:	BALU-PC
//ComputerDescription	: 	WORKGROUP
//WindowsEdition	:	Windows 7 Ultimate
//WindowsProductID	:	00426-OEM-8992662-00497

       info(WindowsProductID,Rating,Processor)
       {
          this.WindowsProductID=WindowsProductID
          this.Rating=Rating
          this.Processor=Processor
 
          if(this.WindowsProductID== "00426-OEM-8992662-00497")
          {
            document.writeln("<br> Relevant Data:")
            this.details("<br>4.00GB","64-bit Operating System","	No Pen or Touch Input is available for this Display ","BALU-PC","WORKGROUP","Windows 7 Ultimate<br>")
          }
          else
          {
            document.writeln(" Try again . Irrevalant Data !!")
          }
       },
      details(InstalledMemory,SystemType,PenandTouch,ComputerName,ComputerDescription,WindowsEdition)
      {

         this.InstalledMemory=InstalledMemory
         this.SystemType=SystemType
         this.PenandTouch=PenandTouch
         this.ComputerName=ComputerName
         this.ComputerDescription=ComputerDescription
         this.WindowsEdition=WindowsEdition
         if(SystemType=="64-bit Operating System")
         {
    
          this.display()
        }
        else
        {
          document.writeln("Error try again!!")
        }
        },
      display()
      {
       
        document.writeln(this.WindowsProductID)
       document.writeln(this.Rating)
       document.writeln(this.Processor)
       document.writeln(this.InstalledMemory)
       document.writeln(this.SystemType)
       document.writeln(this.PenandTouch)
       document.writeln(this.ComputerDescription)
       document.writeln(this.WindowsEdition)
       document.writeln(" Be Yourself")
       }
      }
  SystemProperties.info("00426-OEM-8992662-00497", "4.5","00426-OEM-8992662-00497<br>")
 document.write("<br>")
</script>
