import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-QLSP',
    template: `
        <div class="container">
            <div class="card">
                <div class="card-header bg-dark text-white">Thêm sản phẩm</div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Mã sản phẩm</p>
                        <input #maSanPham type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <p>Tên sản phẩm</p>
                        <input #tenSanPham type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <p>Giá sản phẩm</p>
                        <input #gia type="text" class="form-control">
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-success">Thêm sản phẩm</button>
                </div>
            </div>
            <div class="card mt-2">
                <div class="card-header bg-dark text-white">Danh sách sản phẩm</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hinh anh</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
            </div>
        </div>
    `
})

export class BaiTapQLSV implements OnInit {

    /**
        render san pham ra giao dien
        hien thi xen ke mau sac
        xay dung chuc nang them san pham
     */
    sanPham:sanPham = {maSanPham: '', tenSanPham: '', gia: 0, hinhAnh: ''}

    mangSanPham:sanPham[] = [
        {maSanPham: '1', tenSanPham: 'AAA', gia: 1000, hinhAnh: 'https://picsum.photos/200/200'},
        {maSanPham: '2', tenSanPham: 'BBB', gia: 1000, hinhAnh: 'https://picsum.photos/200/200'},
        {maSanPham: '3', tenSanPham: 'CCC', gia: 1000, hinhAnh: 'https://picsum.photos/200/200'},
        {maSanPham: '4', tenSanPham: 'DDD', gia: 1000, hinhAnh: 'https://picsum.photos/200/200'}
    ]

    constructor() { }
    ngOnInit() { }

   
    
}

interface sanPham {
    maSanPham:string;
    tenSanPham:string;
    gia:number;
    hinhAnh:string;
}