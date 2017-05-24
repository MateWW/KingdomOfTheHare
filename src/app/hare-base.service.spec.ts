import { TestBed, inject } from '@angular/core/testing';


import { HareBaseService } from './hare-base.service';

describe('HareBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HareBaseService]
    });
  });

  it('should add hare to database', inject([HareBaseService], (service: HareBaseService) => {
      service.deleteHare("test name");
      let status = service.addHare("test name",2000);
      expect(status).toBeTruthy();
  }));

  it('should add hare without name', inject([HareBaseService], (service: HareBaseService) => {
      let status = service.addHare("",2000);
      expect(status).toBeFalsy();
  }));

  it('should add duplicate hare', inject([HareBaseService], (service: HareBaseService) => {
      let status = service.addHare("test name",2000);
      expect(status).toBeFalsy();
  }));

  it('should check hare in database', inject([HareBaseService], (service: HareBaseService) => {
      let hares = JSON.stringify(service.getHares());
      expect(hares).toContain(localStorage.getItem("hare_base")||[]);
  }));

   it('should add and check hare in database', inject([HareBaseService], (service: HareBaseService) => {
      let hares = JSON.stringify(service.getHares());
      expect(hares).toContain(localStorage.getItem("hare_base")||[]);
  }));

  it('should return stream and 2 times data', inject([HareBaseService], (service: HareBaseService) => {

      let stream = service.getHaresStream().subscribe((value)=>{
        let stringValue = JSON.stringify(value);
        expect(stringValue).toContain(localStorage.getItem("hare_base")||[]);
      });

      service.addHare("test name",2000);
      service.addHare("test name",2000);
      service.getHares();
  }));

  it('should add carrots', inject([HareBaseService], (service: HareBaseService) => {
      service.addCarrots("test name",50000000);
      service.addCarrots("test name",2000);
      let baseArray = [...JSON.parse(localStorage.getItem("hare_base"))];
      let testElement = baseArray.find( ( hare ) => ( hare.name == "test name") );
      expect(testElement.carrotAmount).toEqual(50004000);
  }));

   it('should delete carrots', inject([HareBaseService], (service: HareBaseService) => {
      service.deleteCarrots("test name",50003900);
      let baseArray = [...JSON.parse(localStorage.getItem("hare_base"))];
      let testElement = baseArray.find( ( hare ) => ( hare.name == "test name") );   
      expect(testElement.carrotAmount).toEqual(100);

      service.deleteCarrots("test name",99);
      baseArray = [...JSON.parse(localStorage.getItem("hare_base"))];
      testElement = baseArray.find( ( hare ) => ( hare.name == "test name") );   
      expect(testElement.carrotAmount).toEqual(1);

      service.deleteCarrots("test name",1);
      baseArray = [...JSON.parse(localStorage.getItem("hare_base"))];
      testElement = baseArray.find( ( hare ) => ( hare.name == "test name") );   
      expect(testElement.carrotAmount).toEqual(0);

      service.deleteCarrots("test name",1000);
      baseArray = [...JSON.parse(localStorage.getItem("hare_base"))];
      testElement = baseArray.find( ( hare ) => ( hare.name == "test name") );   
      expect(testElement.carrotAmount).toEqual(0);
  }));


  

});
