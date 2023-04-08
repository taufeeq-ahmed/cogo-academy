import React from 'react'
import { useState } from 'react';
import Modal from './Modal/Modal';
const ModalHeader = () => {
    return (
        <div>Header</div>
    )
}
const ModalFooter = () => {
    return (
        <div>Footer</div>
    )
}
const Testing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal isShowing={isModalOpen} hide={toggleModal} heading={'Testing'} >
                <h2>Modal Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur harum illum quod! Hic ipsum nemo optio excepturi sit velit neque ad commodi accusamus eaque. At natus quis, atque beatae laborum mollitia harum vel odio error nulla sint molestiae tempora eos a enim dolorum ullam nihil, architecto eum, praesentium aliquam earum voluptatum asperiores voluptatibus! Id fugiat at laboriosam culpa, aliquam dignissimos distinctio asperiores dolores unde, quae odit cumque omnis modi, sed recusandae eos adipisci. Atque nisi architecto omnis, dignissimos quis, placeat dolores, est nostrum voluptate beatae debitis hic! Magnam voluptatum tenetur aspernatur nam odio ad dicta obcaecati maiores reiciendis.</p>

            </Modal>
        </div >
    );
}

export default Testing;
