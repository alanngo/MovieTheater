from mongo.MongoDB import MongoDB

"""
Create a clinic db that has a patient and doctor collection.
Patient collection : name, age, weight, height, prev surgeries.
Doctor collection : name, years of experience, list of patient objects
Functions : 
    add a patient to db : input (patient details) hardcode
    add a doctor to db : input (doctor details) hardcode
    assign a patient to doctor : input (doctor details and patient details)
    deallocate a patient from a doctor : input (doctor details and patient details) 
"""
mongo = MongoDB(
    database="clinicDB",  # the database name you want to use
    docs=["patient", "doctor"],  # collections you want to store in the db
    host="localhost",  # server host
    port=27017  # server port
)

patient = mongo.collection["patient"]
doctor = mongo.collection["doctor"]

PATIENT_LIST = []


def add_patient(new_patient: dict):
    patient.add(new_patient)


def add_doctor(new_doctor: dict):
    doctor.add(new_doctor)


def allocate_doctor(doc_id, pat_id):
    pat = patient.find_by_id(pat_id)
    PATIENT_LIST.append(pat)
    doctor.update_entry(doc_id, "patients", PATIENT_LIST)


def deallocate_doctor(doc_id, pat_id):
    allocated_doctor = doctor.find_by_id(doc_id)
    patients = allocated_doctor["patients"]
    patient_to_remove = patient.find_by_id(pat_id)
    patients.remove(patient_to_remove)
    doctor.update_entry(doc_id, "patients", patients)


def main():
    # add_patient({"name": "Greeshma", "age": 25, "weight": 50, "height": 160})
    # print(patient.find_all())
    # add_doctor({"name": "Alan", "yoe": 3})
    # add_patient({"name": "Nicole", "age": 25, "weight": 120, "height": 160})
    # allocate_doctor(1, 2)
    # allocate_doctor(1, 1)
    deallocate_doctor(1, 2)
    print(doctor.find_all())
    print(patient.find_all())


main()
