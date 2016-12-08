
var math = require('mathjs');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//**************************************************]

var scan_value = [];

var package_priority = scan_value[0];
var trailer_type= scan_value[1];
var current_processing= scan_value[2];
var deadline= scan_value[3];
var percent_trialer_compactness= scan_value[4];
// pre- processing of the package
var processing_doors= scan_value[5];
var parking_resources= scan_value[6];
var unloading_machine_resource= scan_value[7];
var price_of_package= scan_value[8];
var zip_code_paring= scan_value[9];
var schedules = scan_value[10];
var service_cost=scan_value[11];

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//******************************************************//
var tracking_number=[];

var destination_zip=tracking_number[1];
var origination_zip=tracking_number[2];
var orientation_latitude=tracking_number[3];
var destination_latitude=tracking_number[4];
var orientation_longtiude=tracking_number[5];
var destination_longtiude=tracking_number[6];
var type=tracking_number[7];
var uniqueid=tracking_number[8];
var state=tracking_number[9];
var destination_population=tracking_number[9];
var county=tracking_number[10];


no_job(){};



//******************************************************//
// there will be csv file that is attached to this that will be read, convernted to array and play along.

// current_state_recorder[0] = parking avaliablibity or not

function client_firm(){

// deliverability check and formulas entered here.

// distance cost is how much it will cost per km since teh distance is calculated per meter. The estimate is it will cost around 0.03 dollar per KM.
dollar_per_distance = 0.03;
distance_cost = dollar_per_distance *distance(orientation_latitude,destination_latitude,orientation_longtiude,destination_longtiude);

adjusted_insurance_cost=45;

service_cost =  distance_cost + price_of_package*adjusted_insurance_cost;

};


function constrain_functions() {

// set of constrains to make it easier to process data

};

funciton change_deadline(d){

   //array index for deadline is set to maximum;
   deadline=d;
   // update_table();

};
function change_priority(p){

   //array index for priority is set to maximum;
   priority =p;

   //update_table();
};


function maximize_delivarablity() {
    change_deadline(10);
    change_priority(10);
}
//deadline questions
  function deadline_types(sdeadline) {
      
      // soft is 1 and hard/firm is 2
      // add some kind of imputing means here.
  
  if (sdeadline==2) {
    maximize_delivarablity();
  } else {
    no_job();
  }
};

function service_penalty() {
    
    client_firm();

    if(service_cost <= 50)
    {
        no_job();
    }
    else if (service_cost > 50 && service_cost <= 100)
    {
        change_deadline(7);
    }
    else if (service_cost > 100 && service_cost <= 500)
    {
      change_priority(9);
    }
   else if (service_cost > 500)

    {
       change_priority(10);

       }

   else 
   {
       no_job();
   }
       
    
    //this is the service 
};



function scanner() {

    // random package information generartor and create an array per instance

}






//______________________________________________________________________________________//
//_____________________________________________________________________________________//

function distance(orientation_latitude,destination_latitude,orientation_longtiude,destination_longtiude)
{



var radius = 6371e3; 
var la_first = rad(orientation_latitude);
var la_second = rad(destination_latitude);
var lo_first = rad(orientation_longtiude);
var lo_second = rad(destination_longtiude);
var change_la = rad(destination_latitude-orientation_latitude);
var change_lo = rad(destination_longtiude-orientation_longtiude);

var V = Math.sin(change_la/2) * Math.sin(change_la/2) +
        Math.cos(la_first) * Math.cos(la_second) *
        Math.sin(change_lo/2) * Math.sin(change_lo/2);
var N = 2 * Math.atan2(Math.sqrt(V), Math.sqrt(1-V));
kmtometer=0.001
var distance = radius * N * kmtometer;

return +distance.toFixed(4);


}

function rad(Value) {

   return Value * Math.PI / 180;

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function intera_building() {

var current_state_recorder= []; // This holds all information we need interms of the scan value of the compund.



function unloading(processing_doors,priority,price_of_package,trailer_type,schedules) {
    

    switch(schedules) {

        case 1:
        scheduler_1();
        break;

        case 2:
        scheduler_2();
        break;

        case 3:
        scheduler_3();
        break;

        case 4:
        scheduler_4();
        break;
    }



};

function sort() {

     // here is simple zipcode matching is writtten

};



function load() {

    // this simply matches the zipcode.

};

};

function inter_build() {};



function parking_scan(parking_resources) {

 // this checks the parking spot resource.
 // it will update an array. 

};

//  ****************************************************

// below is the part I am going to include RMS, DMS, or other schedulers to show the deliverability of the packages.

function scheduler_chooser()

 {

function scheduler_1() 

{

     // Here the package will wait until there is not . New trailers has to wait before they are processsed.
    
};

funciton scheduler_2() 

{

    // Here the package will be processed according to the calaculation of deliverability. The calcualtion could be simple formulas.
};

function scheduler_3() 

{

//  Here the pacakge will be processed, based on the pacakge priority and the trailer priority.

};

function scheduler_4() 

{
    // packages will be scheduled based on resource avaliablibity only.
};

};

