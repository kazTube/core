import {Component, Input, OnInit} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {FlatCategoryDTO} from '../../dto/FlatCategoryDTO';

interface TreeCategoryModel {
    categoryName: string;
    categoryId: number;
    expandable: boolean;
    level: number;
}


@Component({
    selector: 'app-desktop-product-category-tree',
    templateUrl: './desktop-product-category-tree.component.html',
    styleUrls: ['./desktop-product-category-tree.component.scss']
})
export class DesktopProductCategoryTreeComponent implements OnInit {
    @Input() category: FlatCategoryDTO = null;

    treeControl: FlatTreeControl<TreeCategoryModel>;
    dataSource: MatTreeFlatDataSource<FlatCategoryDTO, TreeCategoryModel>;
    private treeFlattener: MatTreeFlattener<FlatCategoryDTO, TreeCategoryModel>;

    constructor() {
    }


    ngOnInit() {
        this.treeControl = new FlatTreeControl<TreeCategoryModel>(
            node => node.level, node => node.expandable);
        this.treeFlattener = new MatTreeFlattener(
            this.transformer, node => node.level, node => node.expandable, node => node.subCategoryList);
        this.dataSource
            = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.dataSource.data = this.category ? [this.category] : [];
        this.treeControl.expandAll();

    }


    hasChild = (_: number, node: TreeCategoryModel): boolean => node.expandable;

    transformer = (node: FlatCategoryDTO, level: number): TreeCategoryModel => {
        return {
            categoryName: node.name,
            categoryId: node.id,
            expandable: !!node.subCategoryList && node.subCategoryList.length > 0,
            level: level,
        };
    };


}
